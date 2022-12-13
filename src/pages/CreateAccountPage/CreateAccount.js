import React, { useState, useEffect } from "react";
import axios from "axios";
import "./createAccount.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "../LoginPage/Login";

function CreateAccount() {
  const [isActive, setIsActive] = useState(false);
  const [overlayState, setOverlayState] = useState(false);

  const handleClick = (event) => {
    if (!isActive) {
      setIsActive((current) => !current);
    }
  };

  const cancelClick = (event) => {
    setIsActive((current) => !current);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/CreatePassword");
  };

  const [otp, setOtp] = useState(false);
  const handleClickOpen = () => {
    if (!overlayState) {
      setOverlayState((current) => !current);
    }
    setOtp(!otp);
  };

  const closeOtp = () => {
    setOtp(false);
    setOverlayState(false);
  };

  const handleFocus = (e) => {
    e.target.style.border = "1px solid #4A5FE5";
    if (e.target.nextSibling) e.target.nextSibling.focus();
  };

  return (
    <div>
      <div className="main-container">
        <div className="left">
          <img
            className="background-img"
            src="/images/leftside background.svg"
            alt=""
          />
          <div className="logo">
            <img src="/images/ferrum logo 1.svg" alt="logo" />
          </div>
        </div>
        <div className="right">
          <div className="right-con-create-acc">
            <div className="header-create-acc">
              <div className="back-btn-create-acc">
                <Link to={"/Login"}>
                  <button>
                    <img
                      className="back-icon-create-acc"
                      src="/images/general icons.svg"
                      alt=""
                    />
                  </button>
                </Link>
              </div>
              <h1>Hesab yaradın</h1>
            </div>
            <form
              // onSubmit={handleSubmit}
              className="registerFormCreateAcc"
              action=""
            >
              <div className="name-create-acc">
                <label htmlFor="name-create-acc">
                  Ad <span>*</span>
                  <div>
                    <input
                      className="input-create-acc"
                      type="text"
                      id="name-create-acc"
                      required
                      placeholder="Ad"
                    />
                  </div>
                </label>
              </div>
              <div className="surname-create-acc">
                <label htmlFor="surname-create-acc">
                  Soyad <span>*</span>
                  <div>
                    <input
                      className="input-create-acc"
                      type="text"
                      id="surname-create-acc"
                      required
                      placeholder="Soyad"
                    />
                  </div>
                </label>
              </div>
              <div className="fin-code-create-acc">
                <label htmlFor="fin-code-create-acc">
                  FİN kod <span>*</span>
                  <div>
                    <input
                      className="input-create-acc"
                      type="text"
                      id="fin-code-create-acc"
                      required
                      placeholder="A417290NMA"
                    />
                    <button
                      type="button"
                      className="info-btn-create-acc"
                      onClick={handleClick}
                    >
                      <img
                        className="popup-icon-create-acc"
                        src="/images/general icons (2).svg"
                        alt=""
                      />
                    </button>
                  </div>
                </label>
                <div className={isActive ? "fin-popup-create-acc" : "hidden"}>
                  <div className="fin-popup-header-create-acc">
                    <img
                      className="fin-popup-icon-create-acc"
                      src="/images/general icons(4).svg"
                    />
                    <p className="fin-nedir-create-acc">FİN nədir?</p>
                    <button
                      type="button"
                      className={
                        isActive ? "popup-cancel-create-acc" : "hidden"
                      }
                      onClick={cancelClick}
                    >
                      <img src="/images/general icons(5).svg" />
                    </button>
                  </div>
                  <div className="fin-popup-txt-create-acc">
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
              <div className="mob-num-create-acc">
                <label htmlFor="mob-num-create-acc">
                  Mobil nömrə <span>*</span>
                  <div>
                    <input
                      className="input-create-acc"
                      type="number"
                      id="mob-num-create-acc"
                      required
                      placeholder="+994 (50) 123 45 67"
                    />
                  </div>
                </label>
              </div>
              <div className="submit-create-acc">
                <button
                  type="submit"
                  className="continue-btn-create-acc"
                  onClick={handleClickOpen}
                >
                  Davam et
                </button>
              </div>

              <div className="login-create-acc">
                <p>
                  Ferrum kabinetin var?
                  <Link to={"/Login"}>
                    <span> Daxil ol</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className={overlayState ? "overlay-active" : "hidden"}>
          {otp ? (
            <div className="otp-div">
              <form action="" onSubmit={handleSubmit}>
                <div className="otp-header">
                  <p>OTP kodu daxil edin</p>
                  <button
                    type="button"
                    className={
                      overlayState ? "otp-cancel-button" : "overlay-hidden"
                    }
                    onClick={closeOtp}
                  >
                    <img src="/images/close-circle.svg" alt="" />
                  </button>
                </div>
                <div className="otp-txt">
                  <p>
                    +994 (**) *** ** 78 nömrəsinə göndərilən bir dəfəlik şifrəni
                    daxil edin:
                  </p>
                </div>
                <div className="otp-code">
                  <input
                    onChange={handleFocus}
                    autoFocus={true}
                    className="otp-inputs"
                    type="number"
                    name=""
                    id=""
                  />
                  <input
                    onChange={handleFocus}
                    className="otp-inputs"
                    type="number"
                    name=""
                    id=""
                  />
                  <input
                    onChange={handleFocus}
                    className="otp-inputs"
                    type="number"
                    name=""
                    id=""
                  />
                  <input
                    onChange={handleFocus}
                    className="otp-inputs"
                    type="text"
                    maxLength={1}
                    name=""
                    id=""
                  />
                </div>
                <div className="otb-submit">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="otb-submit-btn"
                  >
                    Tamamla
                  </button>
                </div>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
