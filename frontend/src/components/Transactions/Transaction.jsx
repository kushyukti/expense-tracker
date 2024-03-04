import React, { useEffect, useState } from "react";
import "./Transaction.css";
import { useGlobalContext } from "../../hooks/customHooks";

const Transaction = () => {
  const { transactionAllHistory } = useGlobalContext();
  // const [trans, setTrans] = useState([]);
  let trans;

  useEffect(() => {
    trans = transactionAllHistory();
  }, []);

  return (
    <>
      <div className="transaction__container">
        <div className="transaction__title">Transactions</div>
        <div className="transaction__content">yo{trans}</div>
      </div>
    </>
  );
};

export default Transaction;
