import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import home from "./routes/home";
import foro from "./routes/foro";
import videos from "./routes/videos";
import termycondi from "./routes/termycondi";
import bodyParser from "body-parser";

const app = express();
/*app.use(bodyParser.urlencoded({ extended: false }));*/
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(cors());
app.use(morgan("dev"));
app.use(home);
app.use(foro);
app.use(termycondi);
app.use(videos);
export default app;
