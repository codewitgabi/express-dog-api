import { Router } from "express";
import {
  createBreed,
  getBreeds,
  getBreed, updateBreed, deleteBreed
} from "../controllers/breedControllers.js";
const router = Router()


router.post("/create-breed", createBreed);
router.get("/get-breeds", getBreeds);

router.route("/:breedId")
  .get(getBreed)
  .put(updateBreed)
  .patch(updateBreed)
  .delete(deleteBreed)


export default router;
