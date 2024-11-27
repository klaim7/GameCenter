const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Charge les variables d'environnement

const app = express();
const port = process.env.PORT || 3000; // Le port où le serveur écoute

app.use(cors()); // Permet les requêtes entre différents domaines
app.use(bodyParser.json()); // Permet d'analyser les requêtes en JSON

app.get('/', (req, res) => {
  res.send('Bienvenue sur le GameCenter API !');
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
