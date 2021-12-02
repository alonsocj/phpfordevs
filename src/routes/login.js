import { Router } from "express";
import { login, auth, logout } from "../controllers/login";
const router = Router();

router.get("/login", login);
router.post("/auth", auth);
router.get("/logout", logout);
export default router;
