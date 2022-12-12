import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import "./utils/i18n";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
