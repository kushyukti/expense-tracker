import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useGlobalContext } from "../../hooks/customHooks";
import "./expenses.css";
// import exoenseForm from "../expenseForm/expenseForm";
import { dateFormat } from "../../utils/dateFormat";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemExpense from "../ItemExpense/ItemExpense";
import FormExpense from "../FormExpense/FormExpense";

const Expenses = () => {
  const { getExpense, expenses, totalExpense } = useGlobalContext();

  useEffect(() => {
    getExpense();
  }, []);

  return (
    <>
      <div className="expenses__innerlayout">
        {/* ------------------------------title for income page-------------------- */}
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="expense__title">
                  <h2>Expenses</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* -----------------------------title for income page ended ---------------------- */}

        {/* -----------------------------total income area --------------------------------- */}
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="total-expense">
                  Total Expense:
                  <span>${totalExpense()}</span>
                </h2>
              </Col>
            </Row>
          </Container>
        </section>

        {/* --------------------------------total income area ended ------------------------------------ */}

        {/* ----------------------------- form and all income section --------------------------------- */}

        <section>
          <Container>
            <Row>
              <div className="expense_content">
                <Col lg="6">
                  <FormExpense />
                </Col>
                <div className="expense">
                  <Col lg="6">
                    {expenses.map((exp) => {
                      const {
                        _id,
                        title,
                        amount,
                        type,
                        date,
                        category,
                        description,
                      } = exp;

                      return (
                        <ItemExpense
                          key={_id}
                          id={_id}
                          title={title}
                          description={description}
                          amount={amount}
                          date={dateFormat(date)}
                          type={type}
                          category={category}
                          // indicatorColor="var(--color-red)"
                          // deleteItem={deleteIncome}
                          // setIncomes={setIncomes}
                        />
                      );
                    })}
                  </Col>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        {/* -------------------------form and all income section ended ------------------------ */}
      </div>
      <ToastContainer />
    </>
  );
};

export default Expenses;
