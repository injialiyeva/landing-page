import React, { Component } from "react";
import LeftUp from "../../pages/LimitRequestLeftUp/LeftUp";
import "../../pages/LimitRequestLeftUp/leftUp.scss";
import "../LimitRequest/limitRequest.scss";

class LimitRequest extends Component {
  render() {
    return (
      <div className="limitRequest-main-con">
        <LeftUp />
        <div className="limitRequest">
          <form action="" className="limitRequest-form">
            <div className="limitRequest-inputs">
              <div className="limitRequest-amount-foundus">
                <div className="limitRequest-limit-amount">
                  <label htmlFor="">
                    Limit məbləği <span>*</span>
                    <div className="limitRequest-input">
                      <input type="number" required />
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
                    <textarea name="" id=""></textarea>
                  </div>
                </label>
              </div>
              <div>
                <div className="limitRequest-checkbox">
                  <input type="checkbox" />
                  <p>Mənimlə əlaqə saxlanılsın</p>
                </div>
                {/* <div className="limitRequest-selected-slot"></div> */}
              </div>
              {/* <div className="limitRequest-slot-popup">
                <div className="limitRequest-slot-popup-header">
                  <p>Tarix və saat aralığını seçin</p>
                  <div className="limitRequest-slot-popup-x"></div>
                </div>
                <div className="limitRequest-slot-popup-calendar">
                  <input type="date" name="" id="" />
                </div>
                <div className="limitRequest-slot-popup-submit"></div>
              </div> */}
            </div>
            <div className="limitRequest-buttons">
              <button type="submit" className="limitRequest-back-btn">
                <img src="/images/general icons.svg" alt="" />
                Geri
              </button>
              <button type="submit" className="limitRequest-continue-btn">
                Müraciəti tamamla
              </button>
            </div>
            {/* <div className="limitRequest-success-message">
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
                className="limitRequest-success-message-btn"
              >
                Davam et
              </button>
            </div> */}
          </form>
        </div>
      </div>
    );
  }
}

export default LimitRequest;
