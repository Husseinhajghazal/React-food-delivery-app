import React, { useEffect, useState } from "react";

import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../../../scss/main.css";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [btnbumped, setbtnbumped] = useState(false);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    setbtnbumped(true);

    setTimeout(() => {
      setbtnbumped(false);
    }, 300);
  }, [totalAmount]);

  const Classes = `${btnbumped ? "size" : ""}`;

  return (
    <div className="cart__container">
      <motion.div
        className="background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0 }}
        onClick={toggleCart}
      />
      <motion.ListGroup
        className="cart"
        initial={{ translateX: 400 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 0.4 }}
        exit={{ x: 400 }}
      >
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill" />
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item) => <CartItem item={item} key={item.id} />)
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span className={Classes}>${totalAmount}</span>
          </h6>
          <button onClick={toggleCart}>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </motion.ListGroup>
    </div>
  );
};

export default Carts;
