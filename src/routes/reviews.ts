

import { Router } from "express";
import { reviewsController } from "../controllers/reviews";

export const router = Router();

router.get("/", reviewsController.get);
router.get("/:id", reviewsController.getDetails); 
router.post("/", reviewsController.post); 
router.delete("/:id", reviewsController.delete); 
router.put("/:id", reviewsController.put);


