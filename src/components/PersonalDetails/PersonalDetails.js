import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftUp from "../../pages/LimitRequestLeftUp/LeftUp";
import { AccountContext } from "../../AccountContext";
import "../../pages/LimitRequestLeftUp/leftUp.scss";
import "../PersonalDetails/personalDetails.scss";

function PersonalDetails({ name, fin, surname, fatherName, changeDetails }) {
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    changeDetails(value);

    // setDetails((prev) => {
    //   return { ...prev, [name]: value };
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(details);

    // setActive(() => {
    //   return active + 1;
    // });
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    if (!isActive) {
      setIsActive((current) => !current);
    }
  };

  const cancelClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <div>
      {/* <div>{message}</div> */}
      <div className="personalDetails-main-con">
        <LeftUp />
        <div className="personalDetails">
          <form
            action=""
            className="personalDetails-form"
            onSubmit={handleSubmit}
          >
            <div className="personalDetails-inputs">
              <div className="personalDetails-inputs-name-fin">
                <div className="personDetails-name">
                  <label htmlFor="">
                    Ad <span>*</span>
                    <div className="personDetails-name-input personDetails-input">
                      <input
                        type="text"
                        required
                        name="name"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
                <div className="personalDetails-fin">
                  <label htmlFor="">
                    FİN kod <span>*</span>
                    <div className="personalDetails-fin-input personDetails-input">
                      <input
                        type="text"
                        required
                        name="fin"
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className="info-btn-personalDetails"
                        onClick={handleClick}
                      >
                        <img
                          className="popup-icon-personalDetails"
                          src="/images/general icons (2).svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </label>
                </div>
              </div>
              <div className="personalDetails-inputs-bottom">
                <div className="personalDetails-inputs-surname-fathername">
                  <div className="personalDetails-surname">
                    <label htmlFor="">
                      Soyad <span>*</span>
                      <div className="personalDetails-surname-input personDetails-input">
                        <input
                          type="text"
                          required
                          name="surname"
                          onChange={handleChange}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="personalDetails-fathername">
                    <label htmlFor="">
                      Ata adı <span>*</span>
                      <div className="personalDetails-fathername-input personDetails-input">
                        <input
                          type="text"
                          required
                          name="fatherName"
                          onChange={handleChange}
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="personalDetails-id-div">
                  <p>
                    Şəxsiyyət vəsiqəsi <span>*</span>
                  </p>
                  {/* <label htmlFor="">
                    Şəxsiyyət vəsiqəsi <span>*</span>
                  </label> */}
                  <div className="personalDetails-id-inputs">
                    <div className="personalDetails-id-input">
                      <label htmlFor="id-input1">
                        <div className="label">
                          <img src="/images/pic-icon.svg" alt="" />
                          <p>Ön üzünü yüklə</p>
                        </div>
                      </label>
                      <input
                        id="id-input1"
                        type="file"
                        accept="image/png, image/jpeg"
                        // onChange={handleChange}
                      />
                    </div>
                    <div className="personalDetails-id-input">
                      <label htmlFor="id-input2">
                        <div className="label">
                          <img src="/images/pic-icon.svg" alt="" />
                          <p>Arxa üzünü yüklə</p>
                        </div>
                      </label>
                      <input
                        id="id-input2"
                        type="file"
                        accept="image/png, image/jpeg"
                        // onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={isActive ? "fin-popup-personal-d" : "hidden"}>
                <div className="fin-popup-header-personal-d">
                  <img
                    className="fin-popup-icon-personal-d"
                    src="/images/general icons(4).svg"
                  />
                  <p className="fin-nedir-personal-d">FİN nədir?</p>
                  <button
                    type="button"
                    className={isActive ? "popup-cancel-personal-d" : "hidden"}
                    onClick={cancelClick}
                  >
                    <img src="/images/general icons(5).svg" />
                  </button>
                </div>
                <div className="fin-popup-txt-login">
                  <p>
                    FİN kod 7 simvoldan ibarətdir və axırıncı sətirdə göstərilən
                    son səkkiz simvolun ilk yeddisi təşkil edir.
                  </p>
                </div>
                <div>
                  <img src="/images/vəsiqə foto.svg" />
                </div>
              </div>
            </div>
            <div className="personalDetails-buttons">
              <button
                className="personalDetails-skip-btn"
                type="button"
                onClick={() => navigate("/Login")}
              >
                Bu mərhələni keç
              </button>

              <button
                className="personalDetails-continue-btn"
                type="button"
                onClick={() => navigate("/LimitRequest/2")}
              >
                Davam et
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
