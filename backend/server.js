import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cors from "cors";
import db from "./config/db.js";
import testRoute from "./routes/testRoute.js";
import transactionRoute from "./routes/transactionsRoute.js";

dotenv.config();
const app = express();

const port = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("hello");
});

//routes
app.use("/api/v1/transaction", transactionRoute);

app.listen(port, () => {
  console.log(chalk.bgGreen("server listening on port:", port));
  db();
});
