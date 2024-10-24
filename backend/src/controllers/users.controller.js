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

exports.updateEmail = async (req, res) => {
  try {
    const { newEmail, password } = req.body;
    const userId = req.user.id;

    console.log('ID utilisateur depuis le token:', userId);

    if (!newEmail || !password) {
      return res
        .status(400)
        .json({ message: 'Nouvel email et mot de passe sont obligatoires' });
    }

    // Recherche de l'utilisateur par son ID
    const user = await User.findById(userId);
    console.log('Utilisateur trouvé:', user);

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérification du mot de passe
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    // Vérification que l'email n'est pas déjà utilisé
    const emailExist = await User.findOne({ email: newEmail });
    if (emailExist) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    // Mise à jour de l'email
    user.email = newEmail;
    await user.save();

    console.log('Email mis à jour:', user.email);

    return res
      .status(200)
      .json({ message: 'Email mis à jour avec succès', email: user.email });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'email", error);
    return res.status(500).json({ message: 'Erreur serveur', error });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user.id;

    if (!oldPassword || !newPassword) {
      return res
        .status(400)
        .json({ message: 'Ancien et nouveau mot de passe sont obligatoires' });
    }

    // Vérification de l'existence de l'utilisateur
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérification de l'ancien mot de passe
    const isMatch = await comparePassword(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Ancien mot de passe incorrect' });
    }

    // Encrypter le nouveau mot de passe
    const hashedPassword = await encryptPassword(newPassword);

    // Mise à jour du nouveau mot de passe
    user.password = hashedPassword;
    await user.save();

    return res
      .status(200)
      .json({ message: 'Mot de passe mis à jour avec succès' });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du mot de passe', error);
    return res.status(500).json({ message: 'Erreur serveur', error });
  }
};
