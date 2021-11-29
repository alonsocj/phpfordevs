import { Router } from "express";
import { acercaDNosotros } from "../controllers/acercaDNosotros";
const router = Router();

router.get("/acercaDNosotros",acercaDNosotros);

export default router;