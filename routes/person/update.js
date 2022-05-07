const { Router } = require("express");
const Person = require("../../models/Person");
const update = Router();
update.patch("/:id", async (requisition, response) => {
  try {
    const { id } = requisition.params;
    const person = await Person.updateOne({ _id: id }, requisition.body);
    if (!person.matchedCount) {
      response.status(422).json({
        title: "Registro não atualizado!",
        message: "Não existe uma pessoa cadastrada com esse CPF",
      });
      return undefined;
    }
    response.status(200).json(requisition.body);
  } catch (error) {
    response.status(500).json({ error: error, message: error?.message });
  }
});

module.exports = update;
