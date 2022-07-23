const express = require("express");
const cors = require("cors");
require("./database");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/pets", require("./routes"));

app.listen("4000", () => {
  console.log("Server is running on port 4000");
});
