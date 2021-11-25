import { Router } from "express";
import { ejemplo,cuestionario } from "../controllers/home";
const router = Router();

// aqui de esta manera se define una ruta y se llama la funcion de ejemplo que se determino en el controlador
router.get("/", ejemplo);
router.get("/cuestionario/",cuestionario);

export default router;
