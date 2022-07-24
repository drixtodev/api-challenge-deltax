import { config as ConfigDotEnv } from "dotenv";

ConfigDotEnv();

export const PORT: string | number = process.env.PORT ?? 5000;
export const MONGO_URL: string = process.env.MONGO_URL ?? "";
export const MONGO_DATABASE: string = process.env.MONGO_DATABASE ?? "";
