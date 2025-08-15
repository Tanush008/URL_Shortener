import express from "express"
import { getAllUserUrls } from "../controllers/user.controllers.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js"
const router = express.Router()

router.post("/urls",authMiddleware, getAllUserUrls)

export default router
