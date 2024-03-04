import Expense from "../models/Expense.js";
import chalk from "chalk";

export const addExpense = async (req, res) => {
  const { title, category, description, amount, type, date } = req.body;
  console.log(req.body);

  const expense = Expense({
    title,
    category,
    description,
    amount,
    type,
    date,
  });
  try {
    if (
      !expense.title ||
      !expense.category ||
      !expense.description ||
      !expense.type ||
      !expense.amount ||
      !expense.date
    ) {
      return res.status(400).send({
        success: false,
        message: "All fields are required!",
      });
    }

    if (amount <= 0 || !amount === "number") {
      return res.status(400).send({
        success: false,
        message: "Amount must be positive number!",
      });
    }
    await expense.save();
    res.status(200).send({
      success: true,
      message: "Expense Added!",
      data: expense,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Not Added! Please Try Again!",
      error: err,
    });
  }
};

export const getAllExpense = async (req, res) => {
  try {
    const allExpense = await Expense.find().sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      message: "Succeed!",
      data: allExpense,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error!",
      error: error,
    });
  }
};

export const getExpenseById = async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expense.findById(id);

    res.status(200).send({
      success: true,
      message: "Succeed!",
      data: expense,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error!",
      error: err,
    });
  }
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    Expense.findByIdAndDelete(id).then((expense) => {
      console.log("deleted");
      res.status(202).send({
        success: true,
        message: "Expense Deleted!",
      });
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error!",
      error: err,
    });
  }
};
