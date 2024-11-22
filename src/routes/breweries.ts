
import { Router } from "express";
import { breweriesController } from "../controllers/breweries";

export const router = Router();

router.get("/", breweriesController.get);
router.post("/", breweriesController.post); 


