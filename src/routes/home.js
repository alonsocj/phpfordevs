import { Router } from "express";
import { ejemplo,index, cuestionarios,cuestionarioBasico, cuestionarioIntermedio, cuestionarioAvanzado} from "../controllers/home";
const router = Router();

// aqui de esta manera se define una ruta y se llama la funcion de ejemplo que se determino en el controlador
router.get("/", ejemplo);
router.get("/", index);
router.get("/cuestionarios",cuestionarios);
router.get("/cuestionarioBasico/",cuestionarioBasico);
router.get("/cuestionarioIntermedio/",cuestionarioIntermedio);
router.get("/cuestionarioAvanzado/",cuestionarioAvanzado);

export default router;
