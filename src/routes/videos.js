import { Router } from "express";
import { cursos, getVideos } from "../controllers/videos";
const router = Router();

router.get("/cursos", cursos);
router.get("/cursos/:id", getVideos);

export default router;
