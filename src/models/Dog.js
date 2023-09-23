import { Schema, model, ObjectId } from "mongoose";


const DogSchema = new Schema({
  name: {
    type: String,
    maxLength: 50,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    min: [1, "Age cannot be less than 1. Specify age in years"]
  },
  breed: {
    type: ObjectId,
    ref: "Breed"
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true
  },
  color: {
    type: String,
    required: true
  },
  favFood: {
    type: String,
    trim: true,
    required: true,
    maxLength: 30
  },
  favToy: {
    type: String,
    trim: true,
    required: true,
    maxLength: 30
  }
})


export default model("Dog", DogSchema);
