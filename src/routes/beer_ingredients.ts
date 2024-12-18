

import { Router } from "express";
import { beer_ingredientsController } from "../controllers/beer_ingredients";

export const router = Router();

router.get("/", beer_ingredientsController.get);
router.get("/:id", beer_ingredientsController.getDetails);  
router.post("/", beer_ingredientsController.post);
router.put("/:id", beer_ingredientsController.put);
//router.delete("/:id", beer_ingredientsController.delete);



