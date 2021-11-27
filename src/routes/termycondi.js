import { Router } from "express";
import { terminos_condiciones } from "../controllers/termycondi";
const router = Router();

router.get("/terminosycondiciones",terminos_condiciones);

export default router;