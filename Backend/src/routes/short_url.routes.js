import { createShortUrl } from "../controllers/short_url.controllers.js";
import express from "express";
const router = express.Router();
router.post("/", createShortUrl);
export default router;
