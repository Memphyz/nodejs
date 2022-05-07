const { Router } = require("express");
const Person = require("../../models/Person");
const findAll = Router();
findAll.get("/", async (requisition, response) => {
  try {
    response.status(200).json(await Person.find());
  } catch (error) {
    response.status(500).json({ error: error, message: error?.message });
  }
});

module.exports = findAll;
