import express from "express";
import { createExam, getAllExams } from "../controllers/exam.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Create Exam Route
router.post("/create", authMiddleware, createExam);

// Get All Exams Route
router.get("/all", authMiddleware, getAllExams);

export default router;
