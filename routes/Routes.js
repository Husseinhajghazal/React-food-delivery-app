import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AllFoods from "../pages/AllFoods";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import FoodDetails from "../pages/FoodDetails";
import Home from "../pages/Home";

const Routers = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/foods" element={<AllFoods />} />
        <Route path="/foods/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routers;
