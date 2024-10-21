import bcrypt from 'bcrypt';

export const encryptPassword = async (password) => {
  const encryptedPassword = await bcrypt.hashSync(password, 10);

  return encryptedPassword;
};

export const comparePassword = (password, dbPassword) => {
  const isPasswordMatch = bcrypt.compareSync(password, dbPassword);

  return isPasswordMatch;
};

export const signUp = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = newUser({
      email: req.body.email,
      password: hash,
    });
    await newUser.save();

    res.staus(201).json({ message: 'Utilisateur créé' });
  } catch (error) {
    res.status(400).json({ error });
  }
};
