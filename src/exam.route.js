import express from "express";
import { startExam, submitExam, examStatus } from "../controllers/exam.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// start exam
router.post("/start", authMiddleware, startExam);

// submit exam
router.post("/submit", authMiddleware, submitExam);

// exam status
router.get("/status", authMiddleware, examStatus);

export default router;
