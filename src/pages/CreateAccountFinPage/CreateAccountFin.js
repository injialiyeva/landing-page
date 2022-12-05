import React, { useState } from "react";
import "./createAccountFin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CreateAccountFin() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    if (!isActive) {
      setIsActive((current) => !current);
    }
  };

  const cancelClick = (event) => {
    setIsActive((current) => !current);
  };

  // const [passwordShown, setPasswordShown] = useState(false);

  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/CreateAccount");
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = () => {
    setErrorMessage("Belə bir FİN kod mövcud deyil, bir daha sınayın.");
  };

  // useEffect(() => {
  //   setErrorMessage("Belə bir FİN kod mövcud deyil, bir daha sınayın.");
  // });

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
          <div className="right-con">
            <div className="create-acc-txt">
              <div className="back-btn">
                <Link to={"/Login"}>
                  <button type="button">
                    <img
                      className="back-icon"
                      src="/images/general icons.svg"
                      alt=""
                    />
                  </button>
                </Link>
              </div>
              <h1>Hesab yaradın</h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="form"
              action=""
              name="loginForm"
            >
              <div className="fin">
                <label htmlFor="username">
                  FİN kod
                  <div>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="input"
                      required
                      placeholder="1AG3SD8"
                    />
                    <button
                      type="button"
                      className="info-btn"
                      onClick={handleClick}
                    >
                      <img
                        className="popup-icon"
                        src="/images/general icons (2).svg"
                        alt=""
                      />
                    </button>
                  </div>
                </label>

                {/* <p className="error">
                  Belə bir FİN kod mövcud deyil, bir daha sınayın.
                </p> */}
                <div className={isActive ? "fin-popup" : "hidden"}>
                  <div className="fin-popup-header">
                    <img
                      className="fin-popup-icon"
                      src="/images/general icons(4).svg"
                    />
                    <p className="fin-nedir">FİN nədir?</p>
                    <button
                      type="button"
                      className={isActive ? "popup-cancel" : "hidden"}
                      onClick={cancelClick}
                    >
                      <img src="/images/general icons(5).svg" />
                    </button>
                  </div>
                  <div className="fin-popup-txt">
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

              <div className="errorMessage">
                {errorMessage && <p className="error"> {errorMessage} </p>}
              </div>

              <div className="submit">
                <button type="submit" className="continue-btn">
                  Davam et
                </button>
              </div>
              <div className="login">
                <p>
                  Ferrum kabinetin var?
                  <Link to={"/Login"}>
                    {" "}
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

export default CreateAccountFin;
