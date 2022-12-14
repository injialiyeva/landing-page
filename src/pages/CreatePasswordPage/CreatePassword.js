import React, { useState } from "react";
import "./createPassword.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CreatePassword() {
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
          <div className="right-con-create-psw">
            <div className="txt-create-psw">
              <div className="back-btn-create-psw">
                <Link to={"/CreateAccount"}>
                  <button>
                    <img
                      className="back-icon-create-psw"
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
              className="form-create-psw"
              action=""
              name="newPassword"
            >
              <div className="password-create-psw">
                <label htmlFor="psw-create-psw">
                  Şifrə <span>*</span>
                  <div className="input-create-psw">
                    <input
                      type={passwordShown ? "text" : "password"}
                      id="psw-create-psw"
                      required
                      placeholder="Şifrə"
                    />
                    <button
                      type="button"
                      className="show-psw-btn-create-psw"
                      onClick={togglePassword}
                    >
                      <img src="/images/general icons (3).svg" alt="" />
                    </button>
                  </div>
                </label>
              </div>
              <div className="password-create-psw">
                <label htmlFor="psw-again-create-psw">
                  Şifrə təkrarı <span>*</span>
                  <div className="input-create-psw">
                    <input
                      type={passwordShown ? "text" : "password"}
                      id="psw-again-create-psw"
                      required
                      placeholder="Şifrə təkrarı"
                    />
                    <button
                      type="button"
                      className="show-psw-btn-create-psw"
                      onClick={togglePassword}
                    >
                      <img src="/images/general icons (3).svg" alt="" />
                    </button>
                  </div>
                </label>
              </div>
              <div className="submit-create-psw">
                <button type="submit" className="continue-btn-create-psw">
                  Davam et
                </button>
              </div>
              <div className="login-create-psw">
                <p>
                  Ferrum kabinetin var?{" "}
                  <Link to={"/Login"}>
                    {" "}
                    <span> Daxil ol</span>{" "}
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

export default CreatePassword;
