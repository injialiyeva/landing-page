import React from "react";
import { useState } from "react";
import LeftUp from "../../pages/LimitRequestLeftUp/LeftUp";
import "../../pages/LimitRequestLeftUp/leftUp.scss";
import "../ContactDetails/contactDetails.scss";

function ContactDetails({ number, email, number2, changeDetails }) {
  // const [details, SetDetails] = useState({
  //   number: "",
  //   email: "",
  //   number2: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    changeDetails(value);

    // setDetails((prev) => {
    //   return { ...prev, [name]: value };
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log();
  };

  return (
    <div>
      <div className="contactDetails-main-con">
        <LeftUp />
        <div className="contactDetails">
          <form
            action=""
            className="contactDetails-form"
            onSubmit={handleSubmit}
          >
            <div className="contactDetails-inputs">
              <div className="contactDetails-inputs-num-email">
                <div className="contactDetails-num">
                  <label htmlFor="">
                    Mobil nömrə <span>*</span>
                    <div className="contactDetails-num-input contactDetails-input">
                      <input
                        type="number"
                        required
                        name="number"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
                <div className="contactDetails-email">
                  <label htmlFor="">
                    Email adres
                    <div className="contactDetails-email-input contactDetails-input">
                      <input
                        type="email"
                        required
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="contactDetails-inputs-num2-cont">
                <div className="contactDetails-num2">
                  <label htmlFor="">
                    Əlavə mobil nömrə
                    <div className="contactDetails-num2-input contactDetails-input">
                      <input
                        type="number"
                        name="number2"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
                <div className="contactDetails-contact-type">
                  Sizinlə necə əlaqə saxlayaq?
                  <label htmlFor="">
                    Əlaqə vasitəsini seçin
                    <select name="">
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
