import React, { useState } from "react";
import "./createAccountFin.css";
import { Link } from "react-router-dom";

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

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // const givenFin = "1AG3SD8";
  // const fin = document.getElementById("given-fin").value;

  // if ((givenFin = !fin)) {
  // }

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
        <div class="right">
          <div className="right-con">
            <div class="create-acc-txt">
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
              <h1>Hesab yaradın</h1>
            </div>
            <form class="form" action="" name="loginForm">
              <div class="fin">
                <label for="username">
                  FİN kod
                  <div>
                    <input
                      type="text"
                      id="given-fin"
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

              <div class="submit">
                <Link to={"/CreateAccount"}>
                  <button type="submit" class="continue-btn">
                    Davam et
                  </button>
                </Link>
              </div>
              <div class="login">
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
