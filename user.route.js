import express from "express";
import { getUserProfile, updateUserProfile } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// get profile
router.get("/profile", authMiddleware, getUserProfile);

// update profile
router.put("/profile", authMiddleware, updateUserProfile);

export default router;
