import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  getAllExpense,
  getAllIncome,
  postAddExpense,
  postAddIncome,
  postDeleteExpense,
  postDeleteItem,
} from "../apis/servicesTransactions";
import { toast } from "react-toastify";

export const GlobalProviderContext = createContext();

const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const [error, setError] = useState([]);

  const addIncome = async (income) => {
    const response = await postAddIncome(income);
    if (response.error) return alert(response.error);
    getIncome();
    toast.success("Income Added!");
  };
  const addExpense = async (expense) => {
    const response = await postAddExpense(expense);
    if (response.error) return alert(response.error);
    getExpense();
    toast.success("Expense Added!");
  };

  const getIncome = async () => {
    const response = await getAllIncome();
    if (response.error) return alert(response.error);
    if (response) return setIncomes(response.data);
  };

  const getExpense = async () => {
    const response = await getAllExpense();
    if (response.error) return alert(response.error);
    if (response) return setExpenses(response.data);
  };

  const deleteIncome = async (id) => {
    const response = await postDeleteItem(id);
    getIncome();
    if (response.error) return false;
  };
  const deleteExpense = async (id) => {
    const response = await postDeleteExpense(id);
    getExpense();
    if (response.error) return false;
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome.toFixed(2);
  };
  const totalExpense = () => {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense = totalExpense + expense.amount;
    });

    return totalExpense.toFixed(2);
  };

  const totalBalance = () => {
    return (totalIncome() - totalExpense()).toFixed(2);
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  const transactionAllHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setTransactions(history);
  };

  return (
    <GlobalProviderContext.Provider
      value={{
        incomes,
        addIncome,
        totalIncome,
        getIncome,
        deleteIncome,
        setIncomes,
        getExpense,
        expenses,
        addExpense,
        totalExpense,
        deleteExpense,
        totalBalance,
        transactionHistory,
        transactionAllHistory,
        transactions,
      }}
    >
      {children}
    </GlobalProviderContext.Provider>
  );
};

export default GlobalProvider;
