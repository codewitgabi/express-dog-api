import { Schema, model, ObjectId } from "mongoose";


const BreedSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 50,
    unique: true
  },
  size: {
    type: String,
    trim: true,
    required: true,
    maxLength: 6,
    enum: ["Tiny", "Small", "Medium", "Large"],
    default: "Tiny"
  },
  friendliness: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1
  },
  trainability: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1
  },
  sheddingamount: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1
  },
  exerciseneeds: {
    type: Number,
    enum: [1, 2, 3, 4 ,5],
    default: 1
  },
  dogs: [{
    type: ObjectId,
    ref: "Dog"
  }]
})


export default model("Breed", BreedSchema);
