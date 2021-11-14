import { Router } from "express";
import { ejemplo } from "../controllers/home";
const router = Router();

router.get("/", ejemplo);

export default router;
