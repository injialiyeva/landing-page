import React, { useState } from "react";
import "./createPassword.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/Login");
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
          <div className="txt">
            <div className="back-btn">
              <Link to={"/CreateAccount"}>
                <button>
                  <img
                    className="back-icon"
                    src="/images/general icons.svg"
                    alt=""
                  />
                </button>
              </Link>
            </div>
            <h1>Şifrə təyin edin</h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="form"
            action=""
            name="newPassword"
          >
            <div className="password">
              <label htmlFor="psw">
                Yeni şifrə <span>*</span>
                <div className="input">
                  <input
                    type="password"
                    id="psw"
                    required
                    placeholder="Şifrə"
                  />
                  <button className="show-psw-btn">
                    <img src="/images/general icons (3).svg" alt="" />
                  </button>
                </div>
              </label>
            </div>
            <div className="password">
              <label htmlFor="psw-again">
                Şifrə təkrarı <span>*</span>
                <div className="input">
                  <input
                    type="password"
                    id="psw-again"
                    required
                    placeholder="Şifrə təkrarı"
                  />
                  <button className="show-psw-btn">
                    <img src="/images/general icons (3).svg" alt="" />
                  </button>
                </div>
              </label>
            </div>
            <div className="submit">
              <button type="submit" className="continue-btn">
                Davam et
              </button>
            </div>
            <div className="login">
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
