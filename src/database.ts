import mongoose, { Mongoose } from "mongoose";
import { MONGO_URL, MONGO_DATABASE } from "./config";

class MongoFactory {
  private connection?: Mongoose;

  async connect() {
    if (this.connection) {
      console.log("🧩 Database already connected");
      return;
    }
    try {
      this.connection = await mongoose.connect(MONGO_URL, {
        dbName: MONGO_DATABASE,
      });
      console.log("👾 Connected to MongoDB");
    } catch (error) {
      console.log("🚨 Error connecting to MongoDB", error);
      console.error(error);
    }
  }

  async disconnect() {
    await this.connection?.disconnect();
  }
}

export const MongoDatabase = new MongoFactory();
