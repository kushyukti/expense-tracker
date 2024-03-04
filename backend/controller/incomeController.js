import Income from "../models/Income.js";

export const addIncome = async (req, res) => {
  // const newIncome = new Income(req.body);
  const { title, category, description, amount, date } = req.body;

  const income = Income({
    title,
    category,
    description,
    amount,
    date,
  });
  try {
    if (!title || !category || !description || !date || !amount) {
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
    await income.save();
    res.status(200).send({
      success: true,
      message: "Salary Added!",
      data: income,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Not Added! Please Try Again!",
      error: err,
    });
  }
};

export const getAllIncome = async (req, res) => {
  try {
    const allIncome = await Income.find().sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      message: "Succeed!",
      data: allIncome,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error!",
      error: error,
    });
  }
};

export const getIncomeById = async (req, res) => {
  const { id } = req.params;
  try {
    const income = await Income.findById(id);

    res.status(200).send({
      success: true,
      message: "Succeed!",
      data: income,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error!",
      error: err0r,
    });
  }
};

export const deleteIncome = async (req, res) => {
  const { id } = req.params;

  try {
    Income.findByIdAndDelete(id).then((income) => {
      console.log("deleted");
      res.status(202).send({
        success: true,
        message: "Income Deleted!",
      });
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error!",
      error: err0r,
    });
  }
};
