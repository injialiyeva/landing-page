import React, { useState } from "react";
import "./resetPassword.css";
import { Link } from "react-router-dom";

function ResetPassword() {
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = (event) => {
  //   if (!isActive) {
  //     setIsActive((current) => !current);
  //   }
  // };

  // const cancelClick = (event) => {
  //   setIsActive((current) => !current);
  // };

  // const [passwordShown, setPasswordShown] = useState(false);

  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

  return (
    <div>
      <div class="main-container">
        <div class="left">
          <div className="background-img">
            <img src="/images/leftside background.svg" alt="" />
          </div>
          <div class="logo">
            <img src="/images/ferrum logo 1.svg" alt="logo" />
          </div>
        </div>
        <div className="right-con">
          <div class="right">
            <div class="txt">
              <div class="back-btn">
                <Link to={"/Login"}>
                  <button type="button">
                    <img
                      class="back-icon"
                      src="/images/general icons.svg"
                      alt=""
                    />
                  </button>
                </Link>
              </div>
              <h1>Şifrəni yenilə</h1>
            </div>
            <p className="num-info">
              Nömrənizə göndərilən link vasitəsilə şifrənizi yeniləyə
              biləcəksiniz.
            </p>

            <label for="number">
              Mobil nömrə <span>*</span>
            </label>
            <div class="input">
              <input
                type="text"
                name=""
                id="number"
                required
                placeholder="+994 (50) 123 45 67"
              />
              {/* <button type="button" className="info-btn" onClick={handleClick}>
                <img
                  className="popup-icon"
                  src="/images/general icons (2).svg"
                  alt=""
                />
              </button> */}
            </div>

            <div class="submit">
              <Link to={"/PasswordChange"}>
                <button type="submit" class="continue-btn">
                  Davam et
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
