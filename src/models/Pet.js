const { Schema, default: mongoose } = require("mongoose");

const PetSchema = new Schema({
  name: String,
  lat: Number,
  lng: Number,
  urlImage: String,
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
