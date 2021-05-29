import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import RegisterForm from "./component/RegisterForm";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min";
import "./index.css";

const rootElement = document.getElementById("root");
const registerElement = document.getElementById("register-root");

ReactDOM.render(
  <React.StrictMode>
    <RegisterForm />
  </React.StrictMode>,
  registerElement
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
