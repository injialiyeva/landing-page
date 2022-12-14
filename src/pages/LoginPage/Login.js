import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
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

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/Account");
  };

  return (
    <div>
      <div className="main-container">
        <div className="left">
          <div className="background-img">
            <img src="/images/leftside background.svg" alt="" />
          </div>
          <div className="logo">
            <img src="/images/ferrum logo 1.svg" alt="logo" />
          </div>
        </div>
        <div className="right">
          <div className="right-con-login">
            <div className="login-txt">
              <div className="back-btn-login">
                <Link to={"/CreateAccountFin"}>
                  <button type="button">
                    <img
                      className="back-icon"
                      src="/images/general icons.svg"
                      alt=""
                    />
                  </button>
                </Link>
              </div>
              <h1>Daxil ol</h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="form-login"
              action=""
              name="loginForm"
            >
              <div className="fin-login">
                <label htmlFor="username">
                  FİN kod <span>*</span>
                  <div>
                    <input
                      className="input-login"
                      type="text"
                      // id="username"
                      required
                      placeholder="256AGSJ"
                    />
                    <button
                      type="button"
                      className="info-btn-login"
                      onClick={handleClick}
                    >
                      <img
                        className="popup-icon-login"
                        src="/images/general icons (2).svg"
                        alt=""
                      />
                    </button>
                  </div>
                </label>
                <div className={isActive ? "fin-popup-login" : "hidden-login"}>
                  <div className="fin-popup-header-login">
                    <img
                      className="fin-popup-icon-login"
                      src="/images/general icons(4).svg"
                    />
                    <p className="fin-nedir-login">FİN nədir?</p>
                    <button
                      type="button"
                      className={
                        isActive ? "popup-cancel-login" : "hidden-login"
                      }
                      onClick={cancelClick}
                    >
                      <img src="/images/general icons(5).svg" />
                    </button>
                  </div>
                  <div className="fin-popup-txt-login">
                    <p>
                      FİN kod 7 simvoldan ibarətdir və axırıncı sətirdə
                      göstərilən son səkkiz simvolun ilk yeddisi təşkil edir.
                    </p>
                  </div>
                  <div>
                    <img src="/images/vəsiqə foto.svg" />
                  </div>
                </div>
              </div>
              <div className="password-login">
                <label htmlFor="psw-login">
                  Şifrə <span>*</span>
                  <div>
                    <input
                      className="input-login"
                      type={passwordShown ? "text" : "password"}
                      id="psw-login"
                      required
                      placeholder="Şifrə"
                    />
                    <button
                      type="button"
                      className="show-psw-btn-login"
                      onClick={togglePassword}
                    >
                      <img src="/images/general icons (3).svg" alt="" />
                    </button>
                  </div>
                </label>
                <div className="forgot-psw-login">
                  <Link to={"/ResetPassword"}>
                    <p>Şifrəni unutmusan?</p>
                  </Link>
                </div>
              </div>

              <div className="submit-login">
                <button type="submit" className="submit-btn-login">
                  Daxil ol
                </button>
              </div>
              <div className="register-login">
                <p>
                  Ferrum kabinetin yoxdur?
                  <Link to={"/CreateAccountFin"}>
                    <span> Qeydiyyatdan keç</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
