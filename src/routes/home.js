import { Router } from "express";
import {
  ejemplo,
  index,
  cuestionarios,
  cuestionarioBasico,
  cuestionarioIntermedio,
  cuestionarioAvanzado,
  contactos,
} from "../controllers/home";
const router = Router();

// aqui de esta manera se define una ruta y se llama la funcion de ejemplo que se determino en el controlador
router.get("/", ejemplo);
router.get("/", index);
router.get("/cuestionarios", cuestionarios);
router.get("/cuestionarioBasico/", cuestionarioBasico);
router.get("/cuestionarioIntermedio/", cuestionarioIntermedio);
router.get("/cuestionarioAvanzado/", cuestionarioAvanzado);
router.get("/contactanos", contactos);
export default router;
