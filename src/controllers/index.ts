import { Request, Response } from "express";
import { getPetsService, createNewPetService } from "../services";

export const getPetsController = async (req: Request, res: Response) => {
  const pets = await getPetsService();
  res.send(pets);
};

export const createNewPetController = async (req: Request, res: Response) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.urlImage ||
    !req.body.address ||
    !req.body.location.latitude ||
    !req.body.location.longitude
  ) {
    res.status(400).send({
      status: "ERROR",
      message: "Missing required fields",
    });
    return;
  }
  const newPet = {
    name: req.body.name,
    description: req.body.description,
    urlImage: req.body.urlImage,
    address: req.body.address,
    location: req.body.location,
  };
  const createdPet = await createNewPetService(newPet);
  res.status(201).send(createdPet);
};
