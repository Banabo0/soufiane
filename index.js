// On importe le module Express, qui sert à créer un serveur web facilement
const express = require("express");

// On crée une instance d'Express, c'est notre application
const app = express();

// On définit une route GET sur l'URL "/health"
// req = requête envoyée par le client
// res = réponse que l'on va renvoyer
app.get("/health", (req, res) => {
  // On renvoie un code HTTP 200 (OK) et un JSON avec le statut de l'application
  res.status(200).json({ status: "UP" });
});

// On définit une autre route GET sur l'URL "/add"
// Cette route permet d'additionner deux nombres passés en paramètres de l'URL
// Exemple : /add?a=3&b=5
app.get("/add", (req, res) => {
  // On récupère les paramètres 'a' et 'b' depuis l'URL et on les convertit en nombres
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  // On renvoie le résultat de l'addition sous forme de JSON
  res.json({ result: a + b });
});

// On exporte l'application pour pouvoir la réutiliser dans d'autres fichiers (utile pour les tests par exemple)
module.exports = app;

// Cette condition vérifie si ce fichier est exécuté directement avec "node nom_du_fichier.js"
// Si oui, on démarre le serveur sur le port 3000
if (require.main === module) {
  app.listen(3000, () => {
    // Message dans la console pour confirmer que le serveur tourne
    console.log("App running on port 3000");
  });
}
