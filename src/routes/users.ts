
import { Router } from "express";
import { usersController } from "../controllers/users";

export const router = Router();

router.get("/", usersController.get);
router.post("/", usersController.post); 
