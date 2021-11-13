import express from "express";
import cors from "cors";
import home from "./routes/home";
const app = express();
app.use(cors());
app.use(home);
export default app;
