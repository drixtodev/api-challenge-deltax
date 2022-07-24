import express from "express";
import cors from "cors";
import { PORT } from "./config";
import { router } from "./routes";
import { MongoDatabase } from "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/pets", router);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  MongoDatabase.connect();
});
