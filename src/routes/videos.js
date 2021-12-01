import { Router } from "express";
import {
  cursos,
  watchVideo,
  getVideos,
  postComments,
} from "../controllers/videos";
const router = Router();

router.get("/cursos/", cursos);
router.get("/cursos/:id/videos", getVideos);
router.get("/cursos/:id/videos/:cod", watchVideo);
router.post("/cursos/:id/videos/:cod", postComments);

export default router;
