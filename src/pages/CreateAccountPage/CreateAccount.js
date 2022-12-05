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

    navigate("/OTP");
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
        <div className="right">
          <div class="right-con">
            <div class="create-acc">
              <div class="create-acc-header">
                <div class="back-btn">
                  <button>
                    <img
                      class="back-icon"
                      src="/images/general icons.svg"
                      alt=""
                    />
                  </button>
                </div>
                <h1>Hesab yaradın</h1>
              </div>
              <form onSubmit={handleSubmit} class="registerForm" action="">
                <div class="name">
                  <label for="name">
                    Ad <span>*</span>
                    <div>
                      <input type="text" id="name" required placeholder="Ad" />
                    </div>
                  </label>
                </div>
                <div class="surname">
                  <label for="surname">
                    Soyad <span>*</span>
                    <div>
                      <input
                        type="text"
                        id="surname"
                        required
                        placeholder="Soyad"
                      />
                    </div>
                  </label>
                </div>
                <div class="fin-code">
                  <label for="fin-code">
                    FİN kod <span>*</span>
                    <div>
                      <input
                        type="text"
                        id="fin-code"
                        required
                        placeholder="A417290NMA"
                      />
                    </div>
                  </label>
                </div>
                <div class="mob-num">
                  <label for="mob-num">
                    Mobil nömrə <span>*</span>
                    <div>
                      <input
                        type="number"
                        id="mob-num"
                        required
                        placeholder="+994 (50) 123 45 67"
                      />
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
      </div>
    </div>
  );
}

export default CreateAccount;
