import React from "react";
import { ListGroupItem } from "reactstrap";
import "../../../scss/main.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import { motion } from "framer-motion";

const CartItem = ({ item }) => {
  const { id, price, title, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        price,
        title,
        image01,
      })
    );
  };

  const decrementItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />
        <div className="cart__product-info d-flex align-items-center w-100 gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between gap-3 inc__dec-btn">
              <motion.span
                className="dec-btn"
                onClick={incrementItem}
                whileHover={{ color: "#00FF00", scale: 1.2 }}
              >
                <i className="ri-add-line" />
              </motion.span>
              <span className="quantity">{quantity}</span>
              <motion.span
                className="inc-btn"
                onClick={decrementItem}
                whileHover={{ color: "#FF0000", scale: 1.2 }}
              >
                <i className="ri-subtract-line" />
              </motion.span>
            </div>
          </div>
          <motion.span
            className="delete-btn"
            onClick={deleteItem}
            whileHover={{ color: "#FF0000", scale: 1.2 }}
          >
            <i className="ri-close-line" />
          </motion.span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
