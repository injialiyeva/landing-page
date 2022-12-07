import React, { Component } from "react";
import "../ContactDetails/contactDetails.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

class ContactDetails extends Component {
  render() {
    return (
      <div className="contactDetails">
        <form action="" className="contactDetails-form">
          <div className="contactDetails-inputs">
            <div>
              <div className="contactDetails-num">
                <label htmlFor="">
                  Mobil nömrə <span>*</span>
                  <div className="contactDetails-num-input">
                    <input type="number" required />
                  </div>
                </label>
              </div>
              <div className="contactDetails-email">
                <label htmlFor="">
                  Email adres
                  <div className="contactDetails-email-input">
                    <input type="email" required />
                  </div>
                </label>
              </div>
            </div>
            <div>
              <div className="contactDetails-num2">
                <label htmlFor="">
                  Əlavə mobil nömrə
                  <div className="contactDetails-num2-input">
                    <input type="number" />
                  </div>
                </label>
              </div>
              <div className="contactDetails-contact-type"></div>
            </div>
          </div>
          <div className="contactDetails-buttons">
            <div className="contactDetails-back-btn">
              <button type="submit"></button>
            </div>
            <div className="contactDetails-continue-btn">
              <button type="submit"></button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactDetails;
