import React from "react";
import "./leftUp.scss";
import { NavLink } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function LeftUp() {
  return (
    <div>
      <div className="leftUp-main-con">
        <div className="limitRequestLU-left">
          <div className="limitRequestLU-background-img">
            <img src="/images/img.svg" alt="" />
          </div>
          <div className="limitRequestLU-logo">
            <img src="/images/ferrum logo 1.svg" alt="logo" />
          </div>
        </div>
        <div>
          <div className="limitRequestLU-up-secs">
            <NavLink
              to="/LimitRequest/1"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <div className="limitRequestLU-up-secs-pers limitRequestLU-up-sec">
                <button type="submit">
                  <div className="limitRequestLU-up-sec-icon">
                    <img src="/images/step1.svg" alt="" />
                  </div>
                </button>
                <div className="limitRequestLU-up-sec-txt">
                  <p>Şəxsi məlumatlar</p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to="/LimitRequest/2"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <div className="limitRequestLU-up-secs-cont limitRequestLU-up-sec">
                <button type="submit">
                  <div className="limitRequestLU-up-sec-icon">
                    <img src="/images/step2.svg" alt="" />
                  </div>
                </button>
                <div className="limitRequestLU-up-sec-txt">
                  <p>Əlaqə məlumatları</p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to="/LimitRequest/3"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <div className="limitRequestLU-up-secs-work limitRequestLU-up-sec">
                <button type="submit">
                  <div className="limitRequestLU-up-sec-icon">
                    <img src="/images/step3.svg" alt="" />
                  </div>
                </button>
                <div className="limitRequestLU-up-sec-txt">
                  <p>İş detalları</p>
                </div>
              </div>
            </NavLink>

            <NavLink
              to="/LimitRequest/4"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <div className="limitRequestLU-up-secs-limit limitRequestLU-up-sec">
                <button type="submit">
                  <div className="limitRequestLU-up-sec-icon">
                    <img src="/images/step4.svg" alt="" />
                  </div>
                </button>
                <div className="limitRequestLU-up-sec-txt">
                  <p>Limit detalları</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="limitRequestLU-up-header">
            <h1>Limit müraciəti</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftUp;
