import React from "react";
import "./ItemContent.css";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
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

const ItemContent = ({
  id,
  title,
  amount,
  type,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  setIncomes,
  // showToast,
}) => {
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
      <div className="item___content">
        <section>
          <div className="_icon">
            {type === "expense" ? expenseCatIcon() : categoryIcon()}
          </div>
        </section>
        <section>
          <div className="_content">
            <h5>{title}</h5>
            <div className="inner___content">
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

              <div className="btn___content">
                <button
                  onClick={() => {
                    deleteItem(id);
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

export default ItemContent;
