import { Router } from "express";
import { getTemas, getComments, postTemas} from "../controllers/foro";
const router = Router();

router.get("/foro/",getTemas);
//router.post("/foroadd",postTemas);
router.get("/foro/:id",getComments );

export default router;