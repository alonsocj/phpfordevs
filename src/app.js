import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
/*import session from "express-session";
import bcryptjs from "bcryptjs";*/
import home from "./routes/home";
import foro from "./routes/foro";
import cursos from "./routes/cursos";
import videos from "./routes/videos";
import termycondi from "./routes/termycondi";
import acercaDNosotros from "./routes/acercaDNosotros";
import ejemplos from "./routes/ejemplos";
import bodyParser from "body-parser";
import login from "./routes/login";
import register  from "./routes/register";

const app = express();
/*app.use(bodyParser.urlencoded({ extended: false }));*/
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(cors());
app.use(morgan("dev"));
/*app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));*/
app.use(home);
app.use(foro);
app.use(cursos);
app.use(termycondi);
app.use(videos);
app.use(ejemplos);
app.use(acercaDNosotros);
app.use(login);
app.use(register)
export default app;
