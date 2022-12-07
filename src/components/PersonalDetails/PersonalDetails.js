import React, { Component } from "react";
import "../PersonalDetails/personalDetails.scss";

class PersonalDetails extends Component {
  render() {
    return (
      <div className="personalDetails">
        <form action="" className="personalDetails-form">
          <div className="personalDetails-inputs">
            <div className="personalDetails-inputs-name-fin">
              <div className="personDetails-name">
                <label htmlFor="">
                  Ad <span>*</span>
                  <div className="personDetails-name-input personDetails-input">
                    <input type="text" required />
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
              <div className="personalDetails-id-card">
                <label htmlFor="">
                  Şəxsiyyət vəsiqəsi <span>*</span>
                  <div className="personalDetails-id-inputs">
                    <input type="file" accept="image/png, image/jpeg" />
                    <input type="file" accept="image/png, image/jpeg" />
                  </div>
                </label>
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
    );
  }
}

export default PersonalDetails;
