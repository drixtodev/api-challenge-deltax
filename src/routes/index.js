const { getPetsController, createNewPetController } = require("../controllers");

const router = require("express").Router();

router.get("/", getPetsController);

router.post("/", createNewPetController);

module.exports = router;
