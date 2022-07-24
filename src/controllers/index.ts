import { Request, Response } from "express";
import { getPetsService, createNewPetService } from "../services";

export const getPetsController = async (req: Request, res: Response) => {
  const pets = await getPetsService();
  res.send({
    status: "OK",
    pets,
  });
};

export const createNewPetController = async (req: Request, res: Response) => {
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
