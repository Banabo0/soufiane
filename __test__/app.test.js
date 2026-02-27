// On importe la librairie 'supertest', qui permet de faire des requêtes HTTP
// à notre serveur pour tester nos endpoints (routes) de manière automatisée.
const request = require("supertest");

// On importe notre application Express depuis le fichier index.js.
// Cela permet à supertest d'envoyer des requêtes à notre serveur.
const app = require("../index");

// 'describe' est une fonction de Jest (framework de test) qui permet
// de regrouper plusieurs tests sous un même titre. Ici, on regroupe nos tests d'API.
describe("API Tests", () => {

  // 'test' définit un test individuel. Le premier argument est une description du test.
  // Le deuxième argument est une fonction asynchrone contenant le test lui-même.
  test("L'endpoint /health doit retourner un statut UP.", async () => {

    // On envoie une requête GET à l'endpoint '/health' de notre application.
    const res = await request(app).get("/health");

    // On vérifie que le code HTTP de la réponse est bien 200 (OK).
    expect(res.statusCode).toBe(200);

    // On vérifie que le corps de la réponse contient un champ 'status' avec la valeur 'UP'.
    expect(res.body.status).toBe("UP");
  });

  // Deuxième test : vérifie que l'endpoint '/add' retourne le résultat attendu.
  test("L'endpoint /add doit retourner un résultat correct.", async () => {

    // On envoie une requête GET à '/add' avec deux paramètres 'a' et 'b' dans l'URL.
    const res = await request(app).get("/add?a=2&b=3");

    // On vérifie que la réponse contient un champ 'result' égal à 5 (2 + 3).
    expect(res.body.result).toBe(5);
  });
});
