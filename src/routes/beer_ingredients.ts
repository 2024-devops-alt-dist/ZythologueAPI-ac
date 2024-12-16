

import { Router } from "express";
import { beer_ingredientsController } from "../controllers/beer_ingredients";

export const router = Router();

router.get("/", beer_ingredientsController.get);
router.post("/", beer_ingredientsController.post);



