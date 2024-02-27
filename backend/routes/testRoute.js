import express from "express";
import { testController } from "../controller/testController.js";

const router = express.Router();

// router.post("/register", registerController);
router.get("/testroute", testController);

export default router;
