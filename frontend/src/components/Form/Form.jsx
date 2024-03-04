import React, { useState } from "react";
import "./form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../hooks/customHooks";
import { plus } from "../../utils/Icons";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const { addIncome } = useGlobalContext();
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
    addIncome(inputState);
    // toast.success("Income Added!");
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
            placeholder="Income Title"
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
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investment">Investment</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank</option>
            <option value="subscriptions">Business</option>
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
          <button type="submit">{plus} &nbsp;&nbsp;&nbsp;Add Income</button>
        </div>
      </form>
    </>
  );
};

export default Form;
