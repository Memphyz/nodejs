// config

const express = require("express");
const { default: mongoose } = require("mongoose");
const personEndpoints = require("./routes/person/person-module");
const rootEndpoints = require("./routes/root/root-module");
require("dotenv").config();
const app = express();

// forma de ler JSON / middelwares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Rotas
app.use("/person", personEndpoints);
app.use("/", rootEndpoints);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.qqb4i.mongodb.net/node?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectamos ao Banco de Dados!");
    app.listen(3000);
  })
  .catch(console.error);
