import { Router } from "express";
import {
  loginUser,
  refreshAccessToken,
  logoutUser,
} from "../controllers/auth.controllers.js";

const router = Router();

router.post("/login", loginUser);
router.post("/refresh", refreshAccessToken);
router.post("/logout", logoutUser);

export default router;
