import React, { useState } from "react";
import "./FormExpense.css";
import DatePicker from "react-datepicker";
import { plus } from "../../utils/Icons";

import { useGlobalContext } from "../../hooks/customHooks";
import { toast } from "react-toastify";

const FormExpense = () => {
  const { addExpense } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setInputState({ ...inputState, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    addExpense(inputState);
  };
  return (
    <>
      <form className="form__input" onSubmit={handleSubmit}>
        {/* <h2>Incomes</h2> */}
        <div className="input-control">
          <input
            type="text"
            name="title"
            value={inputState.title}
            placeholder="Expense Title"
            onChange={handleInput}
          />
        </div>

        <div className="input-control">
          <input
            type="number"
            name="amount"
            value={inputState.amount}
            placeholder="Enter the amount!"
            onChange={handleInput}
          />
        </div>

        <div className="select input-control">
          <select
            required
            value={inputState.category}
            name="category"
            onChange={handleInput}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>
            <option value="travelling">Travelling</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="input-control date">
          <DatePicker
            showIcon
            id="date"
            placeholder="Enter a Date"
            selected={inputState.date}
            // value={date}
            dateFormat={"dd / MM / yyyy"}
            onChange={(date) => {
              setInputState({ ...inputState, date: date });
            }}
          />
        </div>

        <div className="input-control">
          <textarea
            type="text"
            name="description"
            id="description"
            value={inputState.description}
            placeholder="Description!"
            onChange={handleInput}
          />
        </div>
        <div className="submit-control">
          <button type="submit">{plus} &nbsp;&nbsp;&nbsp;Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default FormExpense;
