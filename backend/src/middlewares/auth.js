const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    // Vérification si le header Authorization est présent
    if (!authorization) {
      return res
        .status(401)
        .json({ message: 'Requête non authentifiée, aucun token fourni' });
    }

    // Extraction du token Bearer
    const token = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token manquant' });
    }

    // Vérification et décryptage du token JWT
    const decodedToken = jwt.verify(token, 'lis!j15465hdfhKLJH15651');
    console.log('Token décodé:', decodedToken);

    // Récupération de l'ID utilisateur à partir du token déchiffré
    const userId = decodedToken.userId;

    // Ajout de l'ID utilisateur à la requête pour les prochains middlewares
    req.user = { id: userId };
    next();
  } catch (error) {
    console.error("Erreur d'authentification", error);
    return res.status(401).json({ message: 'Token invalide ou expiré' });
  }
};
