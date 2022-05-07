const { Router } = require("express");
const get = require("./get");

const endpoints = Router().use(get);

module.exports = endpoints;
