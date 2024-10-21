const User = require('../schemas/users.schema');
const { comparePassword, encryptPassword } = require('../utils/password.utils');
const { generateToken } = require('../utils/jwt.utils');
const dotenv = require('dotenv').config();

exports.signUp = async (req, res) => {
  try {
    const { email, password, secret } = req.body;

    if (!email || !password || !secret) {
      return res
        .status(400)
        .json({ message: 'Email et mot de passe sont obligatoires' });
    }

    if (secret !== process.env.SECRET_CODE) {
      return res.status(401).json({ message: 'Code de sécurité incorrect' });
    }

    const isUserAlreadyExist = await User.findOne({ email });

    if (isUserAlreadyExist) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    const hash = await encryptPassword(password);

    const newUser = new User({
      email: email,
      password: hash,
      accessToken: null,
    });

    await newUser.save();

    return res.status(201).json({ message: 'Utilisateur créé' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email et mot de passe sont obligatoires' });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Email ou mot de passe incorrect' });
    }

    const isMatch = await comparePassword(req.body.password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ message: 'Email ou mot de passe incorrect' });
    }

    const accessToken = await generateToken(user);

    await user.updateOne({ email: email }, { accessToken });

    return res.status(200).json({
      message: 'Connexion réussie',
      user: { email: user.email, accessToken: accessToken },
    });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return res.status(500).json({ message: 'Erreur serveur', error });
  }
};
