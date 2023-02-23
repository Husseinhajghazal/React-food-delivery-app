import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import PageAnimation from "../components/UI/PageAnimation/PageAnimation";

import "../scss/main.css";

const Checkout = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredCountry, setEnteredCountry] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount01 = totalAmount + shippingCost;

  const submitHandler = (e) => {
    e.preventDefault();

    fetch(
      "https://food-web-app-84ddc-default-rtdb.europe-west1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          number: enteredNumber,
          country: enteredCountry,
          city: enteredCity,
          postalCode: postalCode,
          totalAmount: totalAmount01,
        }),
      }
    );

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNumber("");
    setEnteredCountry("");
    setEnteredCity("");
    setPostalCode("");
  };
  return (
    <PageAnimation>
      <Helmet title="Checkout">
        <CommonSection title="Checkout" />
        <section>
          <Container>
            <Row>
              <Col lg="8" md="6">
                <h6>Shipping Address</h6>
                <form className="check__form" onSubmit={submitHandler}>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={enteredName}
                      onChange={(e) => {
                        setEnteredName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={enteredEmail}
                      onChange={(e) => {
                        setEnteredEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="number"
                      placeholder="Phone number"
                      required
                      value={enteredNumber}
                      onChange={(e) => {
                        setEnteredNumber(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Country"
                      required
                      value={enteredCountry}
                      onChange={(e) => {
                        setEnteredCountry(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="City"
                      required
                      value={enteredCity}
                      onChange={(e) => {
                        setEnteredCity(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="number"
                      placeholder="Postal code"
                      required
                      value={postalCode}
                      onChange={(e) => {
                        setPostalCode(e.target.value);
                      }}
                    />
                  </div>
                  <button className="addToCart__btn">Payment</button>
                </form>
              </Col>
              <Col lg="4" md="6">
                <div className="checkout__bill mt-5">
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Subtotal: <span>${totalAmount}</span>
                  </h6>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Shipping: <span>${shippingCost}</span>
                  </h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between">
                      Total: <span>${totalAmount01}</span>
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </PageAnimation>
  );
};

export default Checkout;
