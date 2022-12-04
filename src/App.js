import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/LoginPage/Login";
import CreateAccount from "./pages/CreateAccountPage/CreateAccount";
import CreateAccountFin from "./pages/CreateAccountFinPage/CreateAccountFin";
import PasswordChange from "./pages/PasswordChangePage/PasswordChange";
import ResetPassword from "./pages/ResetPasswordPage/ResetPassword";
import CreatePassword from "./pages/CreatePasswordPage/CreatePassword";
import { useState } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    if (!isActive) {
      setIsActive((current) => !current);
    }
  };

  const cancelClick = (event) => {
    setIsActive((current) => !current);
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/CreateAccountFin" element={<CreateAccountFin />} />
        <Route path="/PasswordChange" element={<PasswordChange />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/CreatePassword" element={<CreatePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
