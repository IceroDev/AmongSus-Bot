/*************************************************
 * 
 * Express server Initialisation
 * 
*************************************************/
const express = require("express");
const app = express();
const expressInit = new Date(Date.now());
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/api.json");
});

const listener = app.listen("63396", () => {
  console.log(expressInit.toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" }) +
  " | Initialisation du serveur express sur le port : "+ listener.address().port)
});