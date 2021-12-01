import { Router } from "express";
import { register, registerPost } from "../controllers/register";
const router = Router();

router.get("/register", register);
router.post("/register", registerPost);
export default router;
