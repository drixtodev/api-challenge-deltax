import { Pets } from "../models/Pet";

export const getPetsService = async () => {
  return await Pets.find();
};

export const createNewPetService = async (pet: {}) => {
  return await Pets.create(pet);
};
