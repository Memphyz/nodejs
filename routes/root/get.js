const { Router } = require("express");

const router = Router();

router.get("/", (_req, res) => {
  // mostrar requisicao
  res.json({
    message: "Meu primeiro backend em node.js",
  });
});

module.exports = router;
