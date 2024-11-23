

import { Router } from "express";
import { beersController } from "../controllers/beers";

export const router = Router();

router.get("/", beersController.get);
router.get("/:id", beersController.getDetails); 
router.post("/", beersController.post); 
router.delete("/:id", beersController.delete); 
router.put("/:id", beersController.put);


