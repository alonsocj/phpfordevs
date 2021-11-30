import { Router } from "express";
import { getEjemplos} from "../controllers/ejemplos";
const router = Router();

router.get("/ejemplos",getEjemplos);

export default router;