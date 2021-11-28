import { Router } from "express";
import { cursos, watchVideo, getVideos } from "../controllers/videos";
const router = Router();

router.get("/cursos/", cursos);
router.get("/cursos/:id/videos", getVideos);
router.get("/cursos/:id/videos/:cod", watchVideo);

export default router;
