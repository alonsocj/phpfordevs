import { Router } from "express";
import { getCursos} from "../controllers/cursos";
const router = Router();

router.get("/cursos",getCursos);

export default router;