const { Router } = require("express");
const create = require("./create");
const findAll = require("./find-all");
const findById = require("./find-by-id");
const update = require("./update");
const deleteById = require("./delete");

const endpoints = Router().use(create, findAll, findById, update, deleteById);

module.exports = endpoints;
