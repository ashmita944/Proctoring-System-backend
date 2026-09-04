import express from "express";
import * as authController from "../controllers/auth.controller.js";

const router = express.Router();

// Register and Login routes mapping
const registerHandler = authController.registerUser || authController.register;
const loginHandler = authController.loginUser || authController.login;

router.post("/register", registerHandler);
router.post("/login", loginHandler);

export default router;
