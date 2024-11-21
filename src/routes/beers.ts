

// import { beersController } from "../controllers/beers";

// router.get("/", beersController.get);
// router.post("/", beersController.post);
// router.put("/", beersController.put);
// router.delete("/", beersController.delete);

import { Router } from "express";
import { beersController } from "../controllers/beers";

export const router = Router();

router.get("/", beersController.get); 
router.post("/", beersController.post); //tesst



