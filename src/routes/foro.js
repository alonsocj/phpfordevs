import { Router } from "express";
import {
  getTemas,
  renderComments,
  postTemas,
  postComments,
  postLike,
  postUnlike,
} from "../controllers/foro";
const router = Router();

router.get("/foro", getTemas);
router.post("/foro", postTemas);
router.get("/foro/:id", renderComments);
router.post("/foro/:id", postComments);
router.post("/foro/:id/like/:res/:us", postLike);
router.post("/foro/:id/unlike/:res/:us", postUnlike);
export default router;
