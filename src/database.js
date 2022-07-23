const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://mongo:c9xUltC9IuCDokGIDMpW@containers-us-west-76.railway.app:5686"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err.message);
  });
