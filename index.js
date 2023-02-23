import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "../src/scss/main.css";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/scss/main.css";
import { BrowserRouter } from "react-router-dom";

import store from "./store/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
