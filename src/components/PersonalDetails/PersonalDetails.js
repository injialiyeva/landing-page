import React, { useState, useContext } from "react";
import LeftUp from "../../pages/LimitRequestLeftUp/LeftUp";
import { AccountContext } from "../../AccountContext";
import "../../pages/LimitRequestLeftUp/leftUp.scss";
import "../PersonalDetails/personalDetails.scss";

function PersonalDetails() {
  const message = useContext(AccountContext);

  const [name, setName] = useState("");
  const [fin, setFin] = useState("");
  const [surname, setSurname] = useState("");
  const [fatherName, setFatherName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, fin, surname, fatherName);
  };

  return (
    <div>
      <div>{message}</div>
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
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        // onChange={(event) => {
                        //   setInput(event.target.value);
                        // }}
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
                        value={fin}
                        onChange={(e) => setFin(e.target.value)}
                      />
                      <button
                        type="button"
                        className="info-btn-personalDetails"
                        //   onClick={handleClick}
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
                          value={surname}
                          onChange={(e) => setSurname(e.target.value)}
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
                          value={fatherName}
                          onChange={(e) => setFatherName(e.target.value)}
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
                      <label htmlFor=""></label>
                      <input
                        id="id-input1"
                        type="file"
                        accept="image/png, image/jpeg"
                        // value={title}
                        // onChange={(e) => setTitle(e.target.value)}
                      />

                      <img src="/images/pic-icon.svg" alt="" />
                      <p>Ön üzünü yüklə</p>
                    </div>
                    <div className="personalDetails-id-input">
                      <label htmlFor=""></label>
                      <input
                        id="id-input2"
                        type="file"
                        accept="image/png, image/jpeg"
                        // value={title}
                        // onChange={(e) => setTitle(e.target.value)}
                      />
                      <img src="/images/pic-icon.svg" alt="" />
                      <p>Arxa üzünü yüklə</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="personalDetails-buttons">
              <button className="personalDetails-skip-btn" type="submit">
                Bu mərhələni keç
              </button>

              <button className="personalDetails-continue-btn" type="submit">
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
