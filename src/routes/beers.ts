

import { Router } from "express";
import { beersController } from "../controllers/beers";

export const router = Router();

// router.get("/", beersController.get); 
// router.post("/", beersController.post); //tesst

router.get("/", beersController.get); // Afficher la liste des bières
router.post("/", beersController.post); // Ajouter une bière


