const { Router } = require("express");
const Person = require("../../models/Person");
const findById = Router();
findById.get("/:id", async (requisition, response) => {
  try {
    // extrair dado da requisicao, pela url = req.params
    const { id } = requisition.params;
    const person = await Person.findOne({ _id: id });
    if (!person) {
      response
        .status(422)
        .json({ message: "Não existe uma pessoa cadastrada com esse CPF" });
      return undefined;
    }
    response.status(200).json(person);
  } catch (error) {
    response.status(500).json({ error: error, message: error?.message });
  }
});

module.exports = findById;
