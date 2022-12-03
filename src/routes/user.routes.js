import { Router } from "express";
import { logInController } from "../controllers/user.controller.js";

const router = Router();

router.post("/login", logInController);

export default router;