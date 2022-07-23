const { getPetsService, createNewPetService } = require("../services");

const getPetsController = async (req, res) => {
  const pets = await getPetsService();
  res.send({
    status: "OK",
    pets,
  });
};

const createNewPetController = async (req, res) => {
  if (!req.body.name || !req.body.lat || !req.body.lng || !req.body.urlImage) {
    res.status(400).send({
      status: "ERROR",
      message: "Missing required fields",
    });
    return;
  }
  const newPet = {
    name: req.body.name,
    lat: req.body.lat,
    lng: req.body.lng,
    urlImage: req.body.urlImage,
  };
  const createdPet = await createNewPetService(newPet);
  res.status(201).send({
    status: "OK",
    pet: createdPet,
  });
};

module.exports = {
  getPetsController,
  createNewPetController,
};
