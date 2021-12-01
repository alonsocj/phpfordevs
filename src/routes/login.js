import { Router } from "express";
import { login, auth } from "../controllers/login";
const router = Router();

router.get("/login", login);
router.post("/auth", auth);
export default router;
