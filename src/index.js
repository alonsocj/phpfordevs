import { config as dotenv } from "dotenv";
dotenv();
import app from "./app";

const PORT = process.env.PORT;
app.listen(PORT);
console.log("Server on PORT " + PORT);
