import express from "express";
// import { register_user, login_user,logout_user,get_current_user } from "../controller/auth.controller.js
import {
  get_current_user,
  login_user,
  register_user,
} from "../controllers/auth.controllers.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";
const router = express.Router();

router.post("/register", register_user);
router.post("/login", login_user);
// router.post("/logout", logout_user)
router.get("/me", authMiddleware, get_current_user);

export default router;
