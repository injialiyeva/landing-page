import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../src/components/PersonalDetails/personalDetails.scss";
import Login from "./pages/LoginPage/Login";
import CreateAccount from "./pages/CreateAccountPage/CreateAccount";
import CreateAccountFin from "./pages/CreateAccountFinPage/CreateAccountFin";
import PasswordChange from "./pages/PasswordChangePage/PasswordChange";
import ResetPassword from "./pages/ResetPasswordPage/ResetPassword";
import CreatePassword from "./pages/CreatePasswordPage/CreatePassword";
import Account from "./pages/AccountPage/Account";
import LeftUp from "./pages/LimitRequestLeftUp/LeftUp";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import LimitRequest from "./components/LimitRequest/LimitRequest";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import WorkDetails from "./components/WorkDetails/WorkDetails";
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
        <Route path="/Account" element={<Account />} />
        <Route path="/LeftUp" element={<LeftUp />} />
        <Route path="/ContactDetails" element={<ContactDetails />} />
        <Route path="/LimitRequest" element={<LimitRequest />} />
        <Route path="/PersonalDetails" element={<PersonalDetails />} />
        <Route path="/WorkDetails" element={<WorkDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
