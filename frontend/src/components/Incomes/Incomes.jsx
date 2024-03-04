import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useGlobalContext } from "../../hooks/customHooks";
import "./incomes.css";
import Form from "../Form/Form";
import ItemContent from "../ItemContent/ItemContent";
import { dateFormat } from "../../utils/dateFormat";
// import ContentBar from "../ContentBar/ContentBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Incomes = () => {
  const { incomes, totalIncome, getIncome, deleteIncome, setIncomes } =
    useGlobalContext();

  useEffect(() => {
    getIncome();
  }, []);

  return (
    <>
      <div className="Incomes__innerlayout">
        {/* ------------------------------title for income page-------------------- */}
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="incomes__title">
                  <h2>Incomes</h2>
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
                <h2 className="total-income">
                  Total Income:
                  <span>${totalIncome()}</span>
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
              <div className="income_content">
                {/* -----------------------------income form ---------------------------------------------- */}
                <Col lg="6">
                  <Form />
                </Col>

                {/* ------------------------------expense form--------------------------------------------- */}
                <div className="incomes">
                  <Col lg="6">
                    {incomes.map((income) => {
                      const {
                        _id,
                        title,
                        amount,
                        type,
                        date,
                        category,
                        description,
                      } = income;

                      return (
                        <ItemContent
                          key={_id}
                          id={_id}
                          title={title}
                          description={description}
                          amount={amount}
                          date={dateFormat(date)}
                          type={type}
                          category={category}
                          indicatorColor="var(--color-green)"
                          deleteItem={deleteIncome}
                          setIncomes={setIncomes}
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

    // <div className="Incomes__container">
    //     <div className="income__content">
    //       <div className="form-container">
    //         <div className="incomes">
    //           <Form />
    //         </div>
    //         <div className="income__content_">{/* <ContentBar /> */}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Incomes;
