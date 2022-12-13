import React from "react";
// import ReactDOM from "react-dom/client";
// import { StrictMode } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "../src/components/PersonalDetails/personalDetails.scss";
import Login from "./pages/LoginPage/Login";
import CreateAccount from "./pages/CreateAccountPage/CreateAccount";
import CreateAccountFin from "./pages/CreateAccountFinPage/CreateAccountFin";
import PasswordChange from "./pages/PasswordChangePage/PasswordChange";
import ResetPassword from "./pages/ResetPasswordPage/ResetPassword";
import CreatePassword from "./pages/CreatePasswordPage/CreatePassword";
// import Account from "./pages/AccountPage/Account";
import LeftUp from "./pages/LimitRequestLeftUp/LeftUp";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import LimitRequest from "./components/LimitRequest/LimitRequest";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import WorkDetails from "./components/WorkDetails/WorkDetails";
import { AccountContext } from "./AccountContext";
import { useState } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [isActive, setIsActive] = useState(false);

  // const [active, setActive] = useState(1);

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

  const [details, setDetails] = useState({
    name: "",
    fin: "",
    surname: "",
    fatherName: "",
    number: "",
    email: "",
    number2: "",
    workPlace: "",
    salary: "",
    workExp: "",
    salary2: "",
  });

  console.log(details);

  return (
    <div>
      <AccountContext.Provider value={"test"}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/CreateAccountFin" element={<CreateAccountFin />} />
            <Route path="/PasswordChange" element={<PasswordChange />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/CreatePassword" element={<CreatePassword />} />
            {/* <Route path="/Account" element={<Account />} /> */}
            <Route path="/LeftUp" element={<LeftUp />} />
            <Route
              path="/LimitRequest/1"
              element={
                <PersonalDetails
                  // active={active}
                  name={details.name}
                  fin={details.fin}
                  surname={details.surname}
                  fatherName={details.fatherName}
                  changeDetails={setDetails}
                />
              }
            />
            <Route
              path="/LimitRequest/2"
              element={
                <ContactDetails
                  number={details.number}
                  email={details.email}
                  number2={details.number2}
                  changeDetails={setDetails}
                />
              }
            />
            <Route
              path="/LimitRequest/3"
              element={
                <WorkDetails
                  workPlace={details.workPlace}
                  salary={details.salary}
                  workExp={details.workExp}
                  salary2={details.salary2}
                  changeDetails={setDetails}
                />
              }
            />
            <Route
              path="/LimitRequest/4"
              element={
                <LimitRequest
                  amount={details.amount}
                  note={details.note}
                  changeDetails={setDetails}
                />
              }
            />
          </Routes>
        </Router>
      </AccountContext.Provider>
    </div>
  );
}

export default App;
