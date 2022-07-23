const Pets = require("../models/Pet");

const getPetsService = async () => {
  return await Pets.find();
};

const createNewPetService = async (pet) => {
  return await Pets.create(pet);
};

module.exports = {
  getPetsService,
  createNewPetService,
};
