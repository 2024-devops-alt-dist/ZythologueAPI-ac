import { Router } from "express";
import { ingredientsController } from "../controllers/ingredients";

export const router = Router();

router.get("/", ingredientsController.get);
router.get("/:id", ingredientsController.getDetails);
router.put("/:id", ingredientsController.put);
router.delete("/:id", ingredientsController.delete);
router.post("/", ingredientsController.post);