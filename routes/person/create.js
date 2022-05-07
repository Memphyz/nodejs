const { Router } = require("express");
const Person = require("./../../models/Person");
const create = Router();
create.post("/", async (req, res) => {
  const person = req.body;
  // create

  if (!person.name || !person._id) {
    const field = (!person.name && "nome") || (!person._id && "CPF");
    res.status(422).json({ message: `O ${field} precisa ser informado!` });
  }

  try {
    await Person.create(req.body).then(() => {
      res.status(201).json({ message: "Pessoa cadastrada com sucesso!" });
    });
  } catch (err) {
    res.status(500).json({ error: error, message: error?.message });
  }
});

module.exports = create;
