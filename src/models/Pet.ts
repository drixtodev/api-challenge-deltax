import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
  name: String,
  description: String,
  urlImage: String,
  address: String,
  location: { latitude: Number, longitude: Number },
});

export const Pet = mongoose.model("Pet", PetSchema);
