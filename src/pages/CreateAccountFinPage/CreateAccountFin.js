import React, { useState, useRef } from "react";
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
  const [errorActive, setErrorActive] = useState(false);
  //   const [toggleClass, setToggleClass] = useState(false);
  //  const handleToggle = () => {
  //       setToggleClass(!toggleClass);
  //     };

  const handleFinChange = (event) => {
    // console.log(event.target.value.length);
    if (event.target.value.length < 7) {
      setErrorMessage("Belə bir FİN kod mövcud deyil, bir daha sınayın.");
      event.target.style.border = "1px solid red";
      setErrorActive((current) => current + 1);
    } else {
      setErrorMessage(null);
      event.target.style.border = "1px solid #EBF1FF";
      setErrorActive((current) => !current);
    }
  };

  useEffect(() => {
    console.log("test");
  }, []);

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
                      maxLength={7}
                      onChange={handleFinChange}
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
                      <div
                        // className={
                        //   toggleClass ? "popup-icon" : "popup-icon-err"
                        // }
                        className={
                          errorActive ? "popup-icon" : "popup-icon-err"
                        }
                      >
                        <svg
                          className={
                            errorActive ? "popup-icon" : "popup-icon-err"
                          }
                          // className={
                          //   toggleClass ? "popup-icon" : "popup-icon-err"
                          // }
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.99967 1.33329C11.6663 1.33329 14.6663 4.33329 14.6663 7.99996C14.6663 11.6666 11.6663 14.6666 7.99967 14.6666C4.33301 14.6666 1.33301 11.6666 1.33301 7.99996C1.33301 4.33329 4.33301 1.33329 7.99967 1.33329Z"
                            stroke="#4E4F51"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 10.6666L8 7.33329"
                            stroke="#4E4F51"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.99609 5.33289L8.00208 5.33289"
                            stroke="#4E4F51"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      {/* <img
                        className={isActive ? "popup-icon" : "error-fin-popup"}
                        src="/images/general icons (2).svg"
                        alt=""
                      /> */}
                      {/* <img
                        className={isActive ? "error-fin-popup" : null}
                        src="/images/error-info.svg"
                        alt=""
                      /> */}
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
