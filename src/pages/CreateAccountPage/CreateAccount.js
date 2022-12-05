import React, { useState } from "react";
import "./createAccount.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CreateAccount() {
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

    navigate("/CreatePassword");
  };

  const [otp, setOtp] = useState(false);
  const handleClickOpen = () => {
    setOtp(!otp);
  };

  const closeOtp = () => {
    setOtp(false);
  };

  const handleFocus = (e) => {
    if (e.target.nextSibling) e.target.nextSibling.focus();
  };

  return (
    <div>
      <div className="main-container otp-background">
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
          <div className="right-con">
            <div className="create-acc">
              <div className="create-acc-header">
                <div className="back-btn">
                  <button>
                    <img
                      className="back-icon"
                      src="/images/general icons.svg"
                      alt=""
                    />
                  </button>
                </div>
                <h1>Hesab yaradın</h1>
              </div>
              <form onSubmit={handleSubmit} className="registerForm" action="">
                <div className="name">
                  <label htmlFor="name">
                    Ad <span>*</span>
                    <div>
                      <input
                        className="crt-acc-input"
                        type="text"
                        id="name"
                        required
                        placeholder="Ad"
                      />
                    </div>
                  </label>
                </div>
                <div className="surname">
                  <label htmlFor="surname">
                    Soyad <span>*</span>
                    <div>
                      <input
                        className="crt-acc-input"
                        type="text"
                        id="surname"
                        required
                        placeholder="Soyad"
                      />
                    </div>
                  </label>
                </div>
                <div className="fin-code">
                  <label htmlFor="fin-code">
                    FİN kod <span>*</span>
                    <div>
                      <input
                        className="crt-acc-input"
                        type="text"
                        id="fin-code"
                        required
                        placeholder="A417290NMA"
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
                <div className="mob-num">
                  <label htmlFor="mob-num">
                    Mobil nömrə <span>*</span>
                    <div>
                      <input
                        className="crt-acc-input"
                        type="number"
                        id="mob-num"
                        required
                        placeholder="+994 (50) 123 45 67"
                      />
                    </div>
                  </label>
                </div>
                <div className="submit">
                  <button
                    type="submit"
                    className="continue-btn"
                    onClick={handleClickOpen}
                  >
                    Davam et
                  </button>
                </div>

                <div className="login">
                  <p>
                    Ferrum kabinetin var?
                    <Link to={"/Login"}>
                      <span> Daxil ol</span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {otp ? (
          <div id="overlay" className="otp">
            <form action="">
              <div className="otp-header">
                <p>OTP kodu daxil edin</p>
                <button type="submit" onClick={closeOtp}>
                  <img src="/images/close-circle.svg" alt="" />
                </button>
              </div>
              <div className="otp-txt">
                <p>
                  +994 (**) *** ** 78 nömrəsinə göndərilən bir dəfəlik şifrəni
                  daxil edin:
                </p>
              </div>
              <div className="otp-code">
                <input
                  onChange={handleFocus}
                  autoFocus={true}
                  className="otp-inputs"
                  type="number"
                  name=""
                  id=""
                />
                <input
                  onChange={handleFocus}
                  className="otp-inputs"
                  type="number"
                  name=""
                  id=""
                />
                <input
                  onChange={handleFocus}
                  className="otp-inputs"
                  type="number"
                  name=""
                  id=""
                />
                <input
                  onChange={handleFocus}
                  className="otp-inputs"
                  type="number"
                  maxLength={1}
                  name=""
                  id=""
                />
              </div>
              <div className="otb-submit">
                <button type="submit" className="otb-submit-btn">
                  Tamamla
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CreateAccount;
