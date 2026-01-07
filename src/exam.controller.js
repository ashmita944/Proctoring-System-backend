import Exam from "../models/Exam.js";

/**
 * CREATE EXAM
 * /api/exam/create
 */
export const createExam = async (req, res) => {
  try {
    const { title, date } = req.body;

    const exam = await Exam.create({
      title,
      date,
      createdBy: req.userId,
    });

    res.status(201).json({ message: "Exam created", exam });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET ALL EXAMS
 * /api/exam/all
 */
export const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find();

    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
