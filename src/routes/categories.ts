

import { Router } from "express";
import { categoriesController } from "../controllers/categories";

export const router = Router();

router.get("/", categoriesController.get);
router.get("/:id", categoriesController.getDetails); 
router.post("/", categoriesController.post); 
router.delete("/:id", categoriesController.delete); 
router.put("/:id", categoriesController.put);


