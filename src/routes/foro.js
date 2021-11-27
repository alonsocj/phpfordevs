import { Router } from "express";
import { getTemas, getComments, postTemas, postComments} from "../controllers/foro";
const router = Router();

router.get("/foro",getTemas);
router.post("/foro",postTemas);
router.get("/foro/:id",getComments );
router.post("/foro/:id",postComments );

export default router;