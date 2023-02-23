import React from "react";
import Routes from "../../routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Carts from "../UI/cart/Carts";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div>
      <Header />
      <AnimatePresence>{showCart && <Carts />}</AnimatePresence>
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
