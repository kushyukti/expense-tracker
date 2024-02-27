import express from "express";
import {
  addIncome,
  deleteIncome,
  getAllIncome,
  getIncomeById,
} from "../controller/incomeController.js";
import {
  addExpense,
  deleteExpense,
  getAllExpense,
  getExpenseById,
} from "../controller/expenseController.js";

const router = express.Router();
router.post("/add-income", addIncome);
router.get("/getAllIncome", getAllIncome);
router.get("/getIncomeById/:id", getIncomeById);
router.delete("/deleteIncome/:id", deleteIncome);
router.post("/add-expense", addExpense);
router.get("/getAllExpense", getAllExpense);
router.get("/getExpenseById/:id", getExpenseById);
router.delete("/deleteExpense/:id", deleteExpense);

export default router;
