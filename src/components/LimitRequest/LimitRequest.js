import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftUp from "../../pages/LimitRequestLeftUp/LeftUp";
import "../../pages/LimitRequestLeftUp/leftUp.scss";
import "../LimitRequest/limitRequest.scss";
import { DateRangePicker, useLocale } from "@adobe/react-spectrum";
import { CalendarDateTime } from "@internationalized/date";
import { parseDate } from "@internationalized/date";
import { isSameMonth, today } from "@internationalized/date";
import { Provider, useProvider, defaultTheme } from "@adobe/react-spectrum";

function LimitRequest({ amount, note, changeDetails }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    changeDetails(value);

    // SetDetails((prev) => {
    //   return { ...prev, [name]: value };
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(details);
  };

  // const current = new Date();
  let [value, setValue] = React.useState({
    start: parseDate("2020-02-03"),
    end: parseDate("2020-02-08"),
  });

  const [overlayState, setOverlayState] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const handleClickOpen = () => {
    if (!overlayState) {
      setOverlayState((current) => !current);
    }
    setSuccessMsg(!successMsg);
    document.body.classList.add("overlay-body");
  };

  const closeSuccessMsg = () => {
    setSuccessMsg(false);
    setOverlayState(false);
    document.body.classList.remove("overlay-body");
  };

  return (
    <div>
      <div className="limitRequest-main-con">
        <div className={overlayState ? "overlay-active" : "hidden"}>
          {successMsg ? (
            <div className="limitRequest-success-message">
              <div className="limitRequest-success-message-img">
                <img src="/images/flat icons.svg" alt="" />
              </div>
              <div className="limitRequest-success-message-txt">
                <h2>Müraciətiniz uğurla tamamlandı!</h2>
                <p>
                  Müraciət sorğunuz uğurla qeydə alındı, sizə qısa zaman ərzində
                  geri dönüş ediləcək.
                </p>
              </div>

              <button
                type="submit"
                // className="limitRequest-success-message-btn"
                className={
                  overlayState
                    ? "limitRequest-success-message-btn"
                    : "overlay-hidden"
                }
                onClick={closeSuccessMsg}
              >
                Davam et
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <LeftUp />
        <div className="limitRequest">
          <form action="" className="limitRequest-form" onSubmit={handleSubmit}>
            <div className="limitRequest-inputs">
              <div className="limitRequest-amount-foundus">
                <div className="limitRequest-limit-amount">
                  <label htmlFor="">
                    Limit məbləği <span>*</span>
                    <div className="limitRequest-input">
                      <input
                        type="number"
                        required
                        name="amount"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
                <div className="limitRequest-found-us">
                  <label htmlFor="">
                    Bizi haradan tanımısınız?
                    <div className="limitRequest-input">
                      <input type="text" />
                    </div>
                  </label>
                </div>
              </div>
              <div className="limitRequest-note">
                <label htmlFor="">
                  Qeyd
                  <div className="limitRequest-textarea">
                    <textarea
                      id=""
                      name="note"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </label>
              </div>
              <div className="checkbox-and-time-picker">
                <div className="limitRequest-checkbox">
                  <input type="checkbox" />
                  <p>Mənimlə əlaqə saxlanılsın</p>
                </div>
                <div className="date-range">
                  <Provider theme={defaultTheme}>
                    <DateRangePicker
                      // label="Date range (controlled)"
                      value={value}
                      onChange={setValue}
                      className="UNSAFE_className"
                    />
                  </Provider>
                </div>
              </div>
            </div>
            <div className="limitRequest-buttons">
              <button
                type="button"
                className="limitRequest-back-btn"
                onClick={() => navigate("/LimitRequest/3")}
              >
                <img src="/images/general icons.svg" alt="" />
                Geri
              </button>
              <button
                type="submit"
                className="limitRequest-continue-btn"
                onClick={handleClickOpen}
              >
                Müraciəti tamamla
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LimitRequest;
