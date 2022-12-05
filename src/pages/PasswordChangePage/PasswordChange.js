import React, { useState } from "react";
import "./passwordChange.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PasswordChange() {
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = (event) => {
  //   if (!isActive) {
  //     setIsActive((current) => !current);
  //   }
  // };

  // const cancelClick = (event) => {
  //   setIsActive((current) => !current);
  // };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/Login");
  };

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
        <div className="right">
          <div class="right-con">
            <div class="txt-psw">
              <div class="back-btn">
                <Link to={"/ResetPassword"}>
                  <button>
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

            <form
              onSubmit={handleSubmit}
              class="form"
              action=""
              name="newPassword"
            >
              <div class="password">
                <label for="psw">
                  Yeni şifrə <span>*</span>
                  <div class="input">
                    <input
                      type={passwordShown ? "text" : "password"}
                      id="psw"
                      required
                      placeholder="Şifrə"
                    />
                    <button
                      type="button"
                      class="show-psw-btn"
                      onClick={togglePassword}
                    >
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
                      type={passwordShown ? "text" : "password"}
                      id="psw-again"
                      required
                      placeholder="Şifrə təkrarı"
                    />
                    <button
                      type="button"
                      class="show-psw-btn"
                      onClick={togglePassword}
                    >
                      <img src="/images/general icons (3).svg" alt="" />
                    </button>
                  </div>
                </label>
              </div>
              <div class="submit">
                <button type="submit" class="continue-btn">
                  Davam et
                </button>
              </div>
              <div class="login">
                <p>
                  Ferrum kabinetin var?{" "}
                  <Link to={"/Login"}>
                    <span>Daxil ol</span>
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

export default PasswordChange;
