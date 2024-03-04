import React from "react";
import "./ItemExpense.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { useGlobalContext } from "../../hooks/customHooks";

const ItemExpense = ({
  id,
  title,
  amount,
  type,
  date,
  category,
  description,
}) => {
  const { deleteExpense } = useGlobalContext();

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
      <div className="item__content">
        <section>
          <div className="icon">
            {type === "expense" ? expenseCatIcon() : categoryIcon()}
          </div>
        </section>
        <section>
          <div className="content">
            <h5>{title}</h5>
            <div className="inner__content">
              <div className="text">
                <p>
                  {dollar} {amount}
                </p>
                <p>
                  {calender} {date}
                </p>
                <p>
                  {comment} {description}
                </p>
              </div>

              <div className="btn__content">
                <button
                  onClick={() => {
                    deleteExpense(id);
                    toast.error("Item Deleted!");
                  }}
                >
                  {trash}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItemExpense;
