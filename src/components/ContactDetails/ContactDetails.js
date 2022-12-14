import React from "react";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import LeftUp from "../../pages/LimitRequestLeftUp/LeftUp";
import "../../pages/LimitRequestLeftUp/leftUp.scss";
import "../ContactDetails/contactDetails.scss";

function ContactDetails({ number, email, number2, changeDetails }) {
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

    // console.log();
  };

  const options = [
    { value: "whatsapp", label: "Whatsapp" },
    { value: "skype", label: "Skype" },
    { value: "messenger", label: "Messenger" },
    { value: "telegram", label: "Telegram" },
    { value: "other", label: "Digər" },
  ];

  const [optionsIcons, setOptionsIcons] = useState(false);
  const handleSelect = (event) => {
    setOptionsIcons(!optionsIcons);
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
                        maxLength={12}
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
                        maxLength={12}
                        type="number"
                        name="number2"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
                <div
                  className="contactDetails-contact-type"
                  onClick={handleSelect}
                >
                  Sizinlə necə əlaqə saxlayaq?
                  <Select options={options} />
                  <div className={optionsIcons ? "option-icons" : "hidden"}>
                    <div className="option-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="12" fill="#5BD066" />
                        <path
                          d="M16.7147 11.9999C16.7147 14.6036 14.604 16.7142 12.0004 16.7142C11.0073 16.7142 10.086 16.4072 9.3261 15.8828L7.7147 16.2856L8.13697 14.7022C7.60078 13.937 7.28613 13.0052 7.28613 11.9999C7.28613 9.3963 9.39679 7.28564 12.0004 7.28564C14.604 7.28564 16.7147 9.3963 16.7147 11.9999Z"
                          fill="#EBF1FF"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 12.9864 6.75968 13.9122 7.2144 14.7127L6.5 17.5L9.3737 16.8336C10.1541 17.2586 11.0489 17.5 12 17.5ZM12 16.6538C14.5702 16.6538 16.6538 14.5702 16.6538 12C16.6538 9.42975 14.5702 7.34615 12 7.34615C9.42975 7.34615 7.34615 9.42975 7.34615 12C7.34615 12.9924 7.65677 13.9122 8.18608 14.6676L7.76923 16.2308L9.35997 15.8331C10.1101 16.3507 11.0197 16.6538 12 16.6538Z"
                          fill="#EBF1FF"
                        />
                        <path
                          d="M10.625 9.44623C10.4942 9.18357 10.2936 9.20683 10.091 9.20683C9.7288 9.20683 9.16406 9.64065 9.16406 10.448C9.16406 11.1097 9.45564 11.8341 10.4382 12.9176C11.3864 13.9633 12.6323 14.5042 13.6666 14.4858C14.7009 14.4674 14.9137 13.5773 14.9137 13.2768C14.9137 13.1435 14.831 13.0771 14.7741 13.059C14.4216 12.8898 13.7715 12.5746 13.6236 12.5154C13.4757 12.4562 13.3985 12.5363 13.3505 12.5799C13.2163 12.7077 12.9504 13.0844 12.8594 13.1692C12.7683 13.2539 12.6326 13.211 12.5761 13.179C12.3683 13.0956 11.8047 12.8449 11.3555 12.4094C10.7999 11.8709 10.7673 11.6856 10.6627 11.5207C10.5789 11.3887 10.6404 11.3078 10.671 11.2724C10.7907 11.1343 10.956 10.9211 11.0301 10.8151C11.1043 10.7091 11.0454 10.5482 11.0101 10.448C10.8583 10.0171 10.7296 9.65635 10.625 9.44623Z"
                          fill="#5BD066"
                        />
                      </svg>
                    </div>
                    <div className="option-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="12" fill="#2173F0" />
                        <g clipPath="url(#clip0_1204_11040)">
                          <ellipse
                            cx="9.6428"
                            cy="9.42851"
                            rx="3.6428"
                            ry="3.42851"
                            fill="#EBF1FF"
                          />
                          <circle
                            cx="14.5711"
                            cy="14.5716"
                            r="3.42851"
                            fill="#EBF1FF"
                          />
                          <circle
                            cx="11.9991"
                            cy="12"
                            r="5.57134"
                            fill="white"
                          />
                          <path
                            d="M12.0297 9C12.9354 9 14.1431 9.42856 13.8412 9.99998C13.4285 10.781 12.6335 9.99998 12.0297 9.99998C11.4259 9.99998 11.124 10.2857 11.124 10.5714C11.124 10.8571 11.2749 11.1428 12.0297 11.4285C12.7845 11.7142 14.1431 12.1428 14.1431 13.2856C14.1431 14.4285 13.0864 14.9999 11.7278 14.9999C10.5108 14.9999 9.61445 14.4285 9.91636 13.8571C10.2636 13.1999 11.124 13.9999 11.7278 13.9999C12.3316 13.9999 12.9354 13.8571 12.9354 13.2856C12.9354 12.7142 12.0297 12.5714 11.4259 12.2857C10.6711 11.9285 9.91635 11.5714 9.91635 10.5714C9.91635 9.57142 11.124 9 12.0297 9Z"
                            fill="#2173F0"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1204_11040">
                            <rect
                              width="12"
                              height="12"
                              fill="white"
                              transform="translate(6 6)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="option-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="12" fill="#00B1FF" />
                        <g clipPath="url(#clip0_1204_11050)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 17.1527C15.0376 17.1527 17.5 14.768 17.5 11.8264C17.5 8.88469 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.88469 6.5 11.8264C6.5 13.4263 7.22841 14.8614 8.38158 15.8378V16.9156C8.38158 17.3369 8.81068 17.6195 9.19326 17.4501L10.3893 16.9207C10.8987 17.0715 11.4396 17.1527 12 17.1527Z"
                            fill="white"
                          />
                          <path
                            d="M10.6826 10.694L9.08769 12.8752C8.91668 13.1091 9.22421 13.3901 9.45834 13.2139L10.8202 12.189C10.9588 12.0847 11.1531 12.0833 11.2934 12.1856L12.5046 13.0691C12.7369 13.2386 13.0688 13.1898 13.2379 12.9615L14.9106 10.7028C15.0841 10.4686 14.7742 10.1853 14.5397 10.3638L13.0999 11.4599C12.9612 11.5655 12.7659 11.5674 12.625 11.4646L11.4177 10.5839C11.1845 10.4138 10.851 10.4637 10.6826 10.694Z"
                            fill="#00B1FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1204_11050">
                            <rect
                              width="12"
                              height="12"
                              fill="white"
                              transform="translate(6 6)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="option-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="12" fill="#007DBB" />
                        <path
                          d="M16.9916 8.75549C17.0695 8.25207 16.5909 7.85472 16.1433 8.05125L7.22801 11.9655C6.90702 12.1065 6.9305 12.5927 7.26342 12.6987L9.10197 13.2842C9.45286 13.3959 9.83283 13.3381 10.1392 13.1264L14.2844 10.2627C14.4094 10.1763 14.5456 10.354 14.4388 10.4641L11.4551 13.5404C11.1656 13.8388 11.2231 14.3445 11.5712 14.5628L14.9118 16.6577C15.2865 16.8926 15.7686 16.6566 15.8386 16.2038L16.9916 8.75549Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contactDetails-buttons">
              <button
                type="button"
                className="contactDetails-back-btn"
                onClick={() => navigate("/LimitRequest/1")}
              >
                <img src="/images/general icons.svg" alt="" />
                Geri
              </button>
              <button
                type="button"
                className="contactDetails-continue-btn"
                onClick={() => navigate("/LimitRequest/3")}
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

export default ContactDetails;
