import React, { useState } from "react";
import "./createPassword.css";
import { Link } from "react-router-dom";

function CreatePassword() {
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
    <div>
      <div class="main-container">
        <div class="left">
          <img
            class="background-img"
            src="/images/leftside background.svg"
            alt=""
          />
          <div class="logo">
            <img src="/images/ferrum logo 1.svg" alt="logo" />
          </div>
        </div>
        <div class="right">
          <div class="txt">
            <div class="back-btn">
              <Link to={"/CreateAccount"}>
                <button>
                  <img
                    class="back-icon"
                    src="/images/general icons.svg"
                    alt=""
                  />
                </button>
              </Link>
            </div>
            <h1>Şifrə təyin edin</h1>
          </div>

          <form class="form" action="" name="newPassword">
            <div class="password">
              <label for="psw">
                Yeni şifrə <span>*</span>
                <div class="input">
                  <input
                    type="password"
                    id="psw"
                    required
                    placeholder="Şifrə"
                  />
                  <button class="show-psw-btn">
                    <img src="/images/general icons (3).svg" alt="" />
                  </button>
                </div>
              </label>
            </div>
            <div class="password">
              <label for="psw-again">
                Şifrə təkrarı <span>*</span>
                <div class="input">
                  <input
                    type="password"
                    id="psw-again"
                    required
                    placeholder="Şifrə təkrarı"
                  />
                  <button class="show-psw-btn">
                    <img src="/images/general icons (3).svg" alt="" />
                  </button>
                </div>
              </label>
            </div>
            <div class="submit">
              <Link to={"Login"}>
                <button type="submit" class="continue-btn">
                  Davam et
                </button>
              </Link>
            </div>
            <div class="login">
              <p>
                Ferrum kabinetin var? <Link to={"/Login"}> Daxil ol</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePassword;
