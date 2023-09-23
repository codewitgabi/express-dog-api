import { Router } from "express";
const router = Router();

import {
  createDog,
  getAllDogs,
  getDog, updateDog, deleteDog
} from "../controllers/dogControllers.js";


router.post("/create-dog", createDog);
router.get("/get-dogs", getAllDogs);

router.route("/:dogId")
  .get(getDog)
  .put(updateDog)
  .patch(updateDog)
  .delete(deleteDog)


export default router;
