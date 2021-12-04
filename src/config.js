import { config as dotenv } from "dotenv";
dotenv();
export const CONFIG = {
  user: process.env.DB_USER || "root",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "root",
  password: process.env.DB_PASSWORD || "root",
  port: process.env.DB_PORT || 5432,
  /*ssl: {
    rejectUnauthorized: false,
  },*/
};
