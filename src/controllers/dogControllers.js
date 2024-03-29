import "express-async-errors";
import Dog from "../models/Dog.js";
import Breed from "../models/Breed.js";
import { APIError } from "../middlewares/errors.js";


export const createDog = async (req, res) => {
  try {
    const newDog = await Dog.create(req.body);

    const breed = await Breed.findById(req.body.breed);
    breed.dogs.push(newDog._id)
    breed.save()

    res.status(201).json(newDog);
  } catch (e) {
    throw new APIError(e.message);
  }
};


export const getAllDogs = async (req, res) => {
  try {
    const dogs = await Dog.find({}).populate("breed")
    res.json(dogs)
  } catch (e) {
    throw new APIError(e.message);
  }
}


export const getDog = async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.dogId).populate("breed");
    res.status(200).json(dog);
  } catch (e) {
    throw new APIError(e.message);
  }
};


export const deleteDog = async (req, res) => {
  try {
    const dog = await Dog.findByIdAndDelete(req.params.dogId);
    const breed = await Breed.findById(dog.breed)
    breed.dogs = breed.dogs.filter((id) => id !== dog._id )
    breed.save()

    res.status(204).json(dog);
  } catch (e) {
    throw new APIError(e.message);
  }
}


export const updateDog = async (req, res) => {
  try {
    const dog = await Dog.findByIdAndUpdate(
      req.params.dogId,
      req.body,
      {
        runValidators: true,
        new: true,
        returnDocument: "after"
      }
    );

    if (!dog) {
      throw new APIError(`No dog found with given id ${req.params.dogId}`);
    }
    res.json(dog)
  } catch (e) {
    throw new APIError(e.message);
  }
}
