const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config;
module.exports = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res
        .status(401)
        .json({ message: 'Requête non authentifiée, aucun token fourni' });
    }
    // Récupération du token JWT de l'en-tête
    const token = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token manquant' });
    }
    // Vérification et décryptage du token JWT
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // Récupération du userId contenu dans le token déchiffré
    const userId = (decodedToken.userIdreq.user = {
      id: userId,
    });
    next();
  } catch (error) {
    console.error("Erreur d'authentification", error);
    res.status(401).json({ message: 'Token invalide ou expiré' });
  }
};
