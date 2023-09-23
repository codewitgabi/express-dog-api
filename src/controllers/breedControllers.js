import "express-async-errors";
import Breed from "../models/Breed.js";
import { APIError } from "../middlewares/errors.js";


export const createBreed = async (req, res) => {
  try {
    const newBreed = await Breed.create(req.body);
    res.json(newBreed);
  } catch (e) {
    throw new APIError(e.message);
  }
}; 


export const getBreeds = async (req, res) => {
  try {
    const breeds = await Breed.find({});
    res.json(breeds);
  } catch (e) {
    throw new APIError(e.message);
  }
};


export const getBreed = async (req, res) => {
  try {
    const breed = await Breed.findById(req.params.breedId).populate("dogs");
    res.json(breed);
  } catch (e) {
    throw new APIError(e.message);
  }
}


export const updateBreed = async (req, res) => {
  try {
    const breed = await Breed.findByIdAndUpdate(
      req.params.breedId,
      req.body,
      {
        runValidators: true,
        new: true,
        returnDocument: "after"
      }
    );

    res.json(breed);
  } catch (e) {
    throw new APIError(e.message);
  }
};


export const deleteBreed = async (req, res) => {
  try {
    const breed = await Breed.findByIdAndDelete(req.params.breedId);
    res.status(204).json(breed);
  } catch (e) {
    throw new APIError(e.message);
  }
};
