const express = require("express");
const cors = require("cors");
require("./database");
const { PORT } = require("./config");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/pets", require("./routes"));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
