import { Router } from "express";
import { getVideos } from "../controllers/videos";
const router = Router();

router.get("/cursos/:id", getVideos);

export default router;
