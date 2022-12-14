import React, { useState } from "react";
import "./resetPassword.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/PasswordChange");
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
          <div className="right-con-reset-psw">
            <div className="txt-reset-psw">
              <div className="back-btn-reset-psw">
                <Link to={"/Login"}>
                  <button type="button">
                    <img
                      className="back-icon-reset-psw"
                      src="/images/general icons.svg"
                      alt=""
                    />
                  </button>
                </Link>
              </div>
              <h1>Şifrəni yenilə</h1>
            </div>
            <p className="num-info-reset-psw">
              Nömrənizə göndərilən link vasitəsilə şifrənizi yeniləyə
              biləcəksiniz.
            </p>

            <form onSubmit={handleSubmit} className="form-reset-psw" action="">
              <label htmlFor="number-reset-psw">
                Mobil nömrə <span>*</span>
              </label>
              <div className="input-reset-psw">
                <input
                  // className="input-reset-psw"
                  type="number"
                  name=""
                  id="number-reset-psw"
                  required
                  placeholder="+994 (50) 123 45 67"
                />
              </div>

              <div className="submit-reset-psw">
                <button type="submit" className="continue-btn-reset-psw">
                  Davam et
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
