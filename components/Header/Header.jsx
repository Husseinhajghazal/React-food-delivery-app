import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../scss/main.css";
import { useState } from "react";

import { motion } from "framer-motion";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const [btnbumped, setbtnbumped] = useState(false);

  const btnClasses = `cart__icon ${btnbumped ? "bump" : ""}`;

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  useEffect(() => {
    setbtnbumped(true);

    setTimeout(() => {
      setbtnbumped(false);
    }, 300);
  }, [totalQuantity]);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex justify-content-between align-items-center">
          <motion.div
            className="logo"
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={1}
          >
            <motion.img
              src={logo}
              alt="Logo"
              drag
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              dragElastic={1}
            />
            <h5>Tasty Treat</h5>
          </motion.div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav__right d-flex align-items-center gap-4">
            <span className={btnClasses} onClick={toggleCart}>
              <i className="ri-shopping-basket-line" />
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line" />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
