import React, { useState } from "react";
import "./passwordChange.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PasswordChange() {
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
          <div className="right-con-psw-change">
            <div className="txt-psw-psw-change">
              <div className="back-btn-psw-change">
                <Link to={"/ResetPassword"}>
                  <button>
                    <img
                      className="back-icon-psw-change"
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
              className="form-psw-change"
              action=""
              name="newPassword"
            >
              <div className="password-psw-change">
                <label htmlFor="psw-change">
                  Yeni şifrə <span>*</span>
                  <div className="input-psw-change">
                    <input
                      type={passwordShown ? "text" : "password"}
                      id="psw-change"
                      required
                      placeholder="Şifrə"
                    />
                    <button
                      type="button"
                      className="show-psw-btn-psw-change"
                      onClick={togglePassword}
                    >
                      <img src="/images/general icons (3).svg" alt="" />
                    </button>
                  </div>
                </label>
              </div>
              <div className="password-psw-change">
                <label htmlFor="psw-again-psw-change">
                  Şifrə təkrarı <span>*</span>
                  <div className="input-psw-change">
                    <input
                      type={passwordShown ? "text" : "password"}
                      id="psw-again-psw-change"
                      required
                      placeholder="Şifrə təkrarı"
                    />
                    <button
                      type="button"
                      className="show-psw-btn-psw-change"
                      onClick={togglePassword}
                    >
                      <img src="/images/general icons (3).svg" alt="" />
                    </button>
                  </div>
                </label>
              </div>
              <div className="submit-psw-change">
                <button type="submit" className="continue-btn-psw-change">
                  Davam et
                </button>
              </div>
              <div className="login-psw-change">
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
