import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number,
  urlImage: String,
});

export const Pets = mongoose.model("Pet", PetSchema);
