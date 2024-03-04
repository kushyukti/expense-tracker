import React, { useEffect, useState } from "react";
import "./Transaction.css";
import { useGlobalContext } from "../../hooks/customHooks";
import { ToastContainer, toast } from "react-toastify";
import { dateFormat } from "../../utils/dateFormat";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  dollar,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/Icons";
const Transaction = () => {
  const { transactionAllHistory, transactions } = useGlobalContext();

  useEffect(() => {
    transactionAllHistory();
  }, []);

  const { title, amount, description, category, date } = transactions;

  const dateChangeer = (date) => {
    let newDate = dateFormat(date);
    return newDate;
  };

  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  return (
    <>
      <div className="transaction__container">
        <div className="transaction__title">Transactions</div>
        <div className="transaction__content">
          {transactions?.map((item, index) => {
            return (
              <>
                <div key={index} className="transaction__content-item">
                  <section>
                    <div className="transaction_icon">
                      {item.type === "expense"
                        ? expenseCatIcon()
                        : categoryIcon()}
                    </div>
                  </section>
                  <section>
                    <div className="transaction__con">
                      <h5>{item.title}</h5>
                      <div className="transaction__inner-con">
                        <div className="transaction__text">
                          <p>
                            {dollar} {item.amount}
                          </p>
                          <p>
                            {calender} {dateChangeer(item.date)}
                          </p>
                          <p>
                            {comment} {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Transaction;
