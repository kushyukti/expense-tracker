import React, { useEffect } from "react";
import "./dashboard.css";
import { useGlobalContext } from "../../hooks/customHooks";
import { dollar } from "../../utils/Icons";
import Chart from "../Chart/Chart";
import History from "../History/History";

const Dashboard = () => {
  const {
    totalIncome,
    getExpense,
    getIncome,
    totalBalance,
    totalExpense,
    incomes,
    expenses,
  } = useGlobalContext();

  useEffect(() => {
    getExpense();
    getIncome();
  }, []);
  return (
    <div className="dashboard__container">
      <div className="dashboard__innerlayout">
        <h1>Dashboard</h1>
        <div className="stats__con">
          <div className="chart__con">
            <Chart />
          </div>
          <div className="amount__con">
            <div className="__income">
              <h2>Total income</h2>
              <p>
                {dollar} {totalIncome()}
              </p>
            </div>
            <div className="__expense">
              <h2>Total Expense</h2>
              <p>
                {dollar} {totalExpense()}
              </p>
            </div>
            <div className="__balance">
              <h2>Total Balance</h2>
              <p>
                {dollar} {totalBalance()}
              </p>
            </div>
          </div>
        </div>

        <div className="history__con">
          <div className="history__item">
            {" "}
            <History />
          </div>
          <div className="history__item">
            {" "}
            <h2 className="salary-title">
              Min <span>Salary</span>
            </h2>
            <div className="salary-item">
              <p>${Math.min(...incomes.map((item) => item.amount))}</p>
              <p>${Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span>
            </h2>
            <div className="salary-item">
              <p>${Math.min(...expenses.map((item) => item.amount))}</p>
              <p>${Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
