import React, { Component } from "react";
import "../LimitRequest/limitRequest.scss";

class LimitRequest extends Component {
  render() {
    return (
      <div className="limitRequest">
        <form action="" className="limitRequest-form">
          <div className="limitRequest-inputs">
            <div>
              <div className="limitRequest-limit-amount">
                <label htmlFor="">
                  Limit məbləği <span>*</span>
                  <input type="number" name="" id="" required />
                </label>
              </div>
              <div className="limitRequest-found-us">
                <label htmlFor="">
                  Bizi haradan tanımısınız?
                  <input type="text" name="" id="" />
                </label>
              </div>
            </div>
            <div className="limitRequest-note">
              <label htmlFor="">
                Qeyd
                <input type="text" />
              </label>
            </div>
            <div>
              <div className="limitRequest-checkbox">
                <input type="checkbox" />
                <p>Mənimlə əlaqə saxlanılsın</p>
              </div>
              <div className="limitRequest-selected-slot"></div>
            </div>
            <div className="limitRequest-slot-popup">
              <div className="limitRequest-slot-popup-header">
                <p>Tarix və saat aralığını seçin</p>
                <div className="limitRequest-slot-popup-x"></div>
              </div>
              <div className="limitRequest-slot-popup-calendar">
                <input type="date" name="" id="" />
              </div>
              <div className="limitRequest-slot-popup-submit"></div>
            </div>
          </div>
          <div className="limitRequest-buttons">
            <div className="limitRequest-back-btn">
              <button type="submit"></button>
            </div>
            <div className="limitRequest-continue-btn">
              <button type="submit"></button>
            </div>
          </div>
          <div className="limitRequest-success-message">
            <div className="limitRequest-success-message-img"></div>
            <div className="limitRequest-success-message-txt">
              <h2>Müraciətiniz uğurla tamamlandı!</h2>
              <p>
                Müraciət sorğunuz uğurla qeydə alındı, sizə qısa zaman ərzində
                geri dönüş ediləcək.
              </p>
            </div>
            <div className="limitRequest-success-message-btn">
              <button type="submit"></button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LimitRequest;
