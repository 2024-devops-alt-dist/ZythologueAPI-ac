
import { Router } from "express";
import { usersController } from "../controllers/users";

export const router = Router();

router.get("/", usersController.get);
router.post("/", usersController.post); 
router.delete("/:id", usersController.delete);
router.put("/:id", usersController.put);
router.get("/:id", usersController.getDetails);
