import React, { useEffect } from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import "../scss/main.css";

import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import PageAnimation from "../components/UI/PageAnimation/PageAnimation";
import { motion } from "framer-motion";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <PageAnimation>
      <Helmet title="Cart">
        <CommonSection title="Your Cart" />
        <section>
          <Container>
            <Row>
              <Col lg="12">
                {cartItems.length === 0 ? (
                  <h5 className="text-center">Your cart is empty</h5>
                ) : (
                  <Fragment>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Title</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <Tr item={item} key={item.id} />
                        ))}
                      </tbody>
                    </table>
                    <div className="mt-4">
                      <h6>
                        SubTotal: $
                        <span className="cart__subtotal">{totalAmount}</span>
                      </h6>
                      <p>Taxes and shipping will calculate at checkout</p>
                      <div className="cart__page-btn">
                        <button className="addToCart__btn me-4">
                          <Link to="/foods">Continue Shopping</Link>
                        </button>
                        <button className="addToCart__btn">
                          <Link to="/checkout">Procced to checkout</Link>
                        </button>
                      </div>
                    </div>
                  </Fragment>
                )}
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </PageAnimation>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}x</td>
      <motion.td className="text-center cart__item-del" onClick={deleteItem}>
        <i className="ri-delete-bin-line" />
      </motion.td>
    </tr>
  );
};

export default Cart;
