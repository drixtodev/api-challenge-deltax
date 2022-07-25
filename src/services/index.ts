import { Pet } from "../models/Pet";

export const getPetsService = async () => {
  return await Pet.find();
};

export const createNewPetService = async (pet: {}) => {
  return await Pet.create(pet);
};
