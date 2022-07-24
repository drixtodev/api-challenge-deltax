import { getPetsController, createNewPetController } from "../controllers";
import { Router } from "express";

const router = Router();

router.get("/", getPetsController).post("/", createNewPetController);

export { router };
