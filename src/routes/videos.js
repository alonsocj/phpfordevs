import { Router } from "express";
import {
  cursos,
  watchVideo,
  getVideos,
  postComments,
  postLikeComment,
  postUnlikeComment,
  postLikeVideo,
  postUnlikeVideo,
} from "../controllers/videos";
const router = Router();

router.get("/cursos/", cursos);
router.get("/cursos/:id/videos", getVideos);
router.get("/cursos/:id/videos/:cod", watchVideo);
router.post("/cursos/:id/videos/:cod", postComments);
router.post("/cursos/:id/videos/:cod/like/:res/:us", postLikeComment);
router.post("/cursos/:id/videos/:cod/unlike/:res/:us", postUnlikeComment);
router.post("/cursos/:id/videos/:cod/like/:us", postLikeVideo);
router.post("/cursos/:id/videos/:cod/unlike/:us", postUnlikeVideo);

export default router;
