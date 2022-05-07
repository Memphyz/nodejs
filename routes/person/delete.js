const { Router } = require("express");
const Person = require("./../../models/Person");
const router = Router();
router.delete("/:id", async (req, res) => {
  // create
  try {
    const { id } = req.params;
    const person = await Person.findOne({ _id: id });
    if (!person) {
      res
        .status(422)
        .json({
          title: "Pessoa não encontrada!",
          message: "Informe um CPF válido ou que já esteja cadastrado!",
        });
    }
    await Person.deleteOne({ _id: id }).then(() => {
      res.status(201).json({ message: "Pessoa deletada com sucesso!" });
    });
  } catch (err) {
    res.status(500).json({ error: error, message: error?.message });
  }
});

module.exports = router;
