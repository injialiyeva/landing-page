import React from "react";
import LeftUp from "../../pages/LimitRequestLeftUp/LeftUp";
import "../../pages/LimitRequestLeftUp/leftUp.scss";
import "../ContactDetails/contactDetails.scss";

function ContactDetails() {
  return (
    <div>
      <div className="contactDetails-main-con">
        <LeftUp />
        <div className="contactDetails">
          <form action="" className="contactDetails-form">
            <div className="contactDetails-inputs">
              <div className="contactDetails-inputs-num-email">
                <div className="contactDetails-num">
                  <label htmlFor="">
                    Mobil nömrə <span>*</span>
                    <div className="contactDetails-num-input contactDetails-input">
                      <input type="number" required />
                    </div>
                  </label>
                </div>
                <div className="contactDetails-email">
                  <label htmlFor="">
                    Email adres
                    <div className="contactDetails-email-input contactDetails-input">
                      <input type="email" required />
                    </div>
                  </label>
                </div>
              </div>
              <div className="contactDetails-inputs-num2-cont">
                <div className="contactDetails-num2">
                  <label htmlFor="">
                    Əlavə mobil nömrə
                    <div className="contactDetails-num2-input contactDetails-input">
                      <input type="number" />
                    </div>
                  </label>
                </div>
                <div className="contactDetails-contact-type">
                  Sizinlə necə əlaqə saxlayaq?
                  <label htmlFor="" for="contact-tpye">
                    Əlaqə vasitəsini seçin
                    <select name="" id="contact-type">
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
            <div className="contactDetails-buttons">
              <button type="submit" className="contactDetails-back-btn">
                <img src="/images/general icons.svg" alt="" />
                Geri
              </button>
              <button type="submit" className="contactDetails-continue-btn">
                Davam et
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
