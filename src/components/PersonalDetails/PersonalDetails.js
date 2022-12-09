import React, { Component, useContext } from "react";
import LeftUp from "../../pages/LimitRequestLeftUp/LeftUp";
import { AccountContext } from "../../AccountContext";
import "../../pages/LimitRequestLeftUp/leftUp.scss";
import "../PersonalDetails/personalDetails.scss";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    // const { setInput } = useContext(AccountContext);
  }

  render() {
    return (
      <div className="personalDetails-main-con">
        <LeftUp />
        <div className="personalDetails">
          <form action="" className="personalDetails-form">
            <div className="personalDetails-inputs">
              <div className="personalDetails-inputs-name-fin">
                <div className="personDetails-name">
                  <label htmlFor="">
                    Ad <span>*</span>
                    <div className="personDetails-name-input personDetails-input">
                      <input
                        type="text"
                        required
                        onChange={(event) => {
                          this.setInput(event.target.value);
                        }}
                      />
                    </div>
                  </label>
                </div>
                <div className="personalDetails-fin">
                  <label htmlFor="">
                    FİN kod <span>*</span>
                    <div className="personalDetails-fin-input personDetails-input">
                      <input type="text" required />
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
                        <input type="text" required />
                      </div>
                    </label>
                  </div>
                  <div className="personalDetails-fathername">
                    <label htmlFor="">
                      Ata adı <span>*</span>
                      <div className="personalDetails-fathername-input personDetails-input">
                        <input type="text" required />
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
                      <label htmlFor="" for="id-input1"></label>
                      <input
                        id="id-input1"
                        type="file"
                        accept="image/png, image/jpeg"
                      />

                      <img src="/images/pic-icon.svg" alt="" />
                      <p>Ön üzünü yüklə</p>
                    </div>
                    <div className="personalDetails-id-input">
                      <label htmlFor="" for="id-input2"></label>
                      <input
                        id="id-input2"
                        type="file"
                        accept="image/png, image/jpeg"
                      />
                      <img src="/images/pic-icon.svg" alt="" />
                      <p>Arxa üzünü yüklə</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="personalDetails-buttons">
              <div className="personalDetails-skip-btn">
                <button type="submit">Bu mərhələni keç</button>
              </div>
              <div className="personalDetails-continue-btn">
                <button type="submit">Davam et</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PersonalDetails;
