import React from "react";
import { render } from "react-dom";
import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./global-styles";

render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
