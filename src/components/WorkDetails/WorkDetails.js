import React, { useState } from "react";
import LeftUp from "../../pages/LimitRequestLeftUp/LeftUp";
import "../../pages/LimitRequestLeftUp/leftUp.scss";
import "../WorkDetails/workDetails.scss";

function WorkDetails({ workPlace, salary, workExp, salary2, changeDetails }) {
  // const [details, SetDetails] = useState({
  //   workPlace: "",
  //   salary: "",
  //   workExp: "",
  //   salary2: "",
  // });

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

  return (
    <div>
      <div className="workDetails-main-con">
        <LeftUp />
        <div className="workDetails">
          <form action="" className="workDetails-form" onSubmit={handleSubmit}>
            <div className="workDetails-inputs">
              <div className="workDetails-comp-sal">
                <div className="workDetails-company">
                  <label htmlFor="">
                    İş yeri <span>*</span>
                    <div className="workDetails-company-input  workDetails-input">
                      <input
                        type="text"
                        required
                        name="workPlace"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
                <div className="workDetails-salary">
                  <label htmlFor="">
                    Gəlir <span>*</span>
                    <div className="workDetails-salary-input workDetails-input">
                      <input
                        type="number"
                        name="salary"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="workDetails-work-sal-add">
                <div className="workDetails-work-exp">
                  <label htmlFor="">
                    İş təcrübəsi <span>*</span>
                    <div className="workDetails-work-exp workDetails-input">
                      <input
                        type="text"
                        required
                        name="workExp"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
                <div className="workDetails-salary-add">
                  <label htmlFor="">
                    Əlavə gəliriniz
                    <div className="workDetails-input">
                      <input
                        type="number"
                        name="salary2"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="workDetails-checkbox">
              <input type="checkbox" />
              <p>
                Məlumatların doğruluğunu təsdiq edir, kredit öhdəliklərim barədə
                məlumatları AKB kredit reyesterindən əldə edilməsinə və
                reyesterə ötürülməsinə, şəxsi və iş yerim üzrə məlumatları isə
                ASAN Finans sistemi vasitəsi ilə əldə edilməsinə icazə verirəm.
              </p>
            </div>
            <div className="workDetails-buttons">
              <button type="submit" className="workDetails-back-btn">
                <img src="/images/general icons.svg" alt="" />
                Geri
              </button>
              <button type="submit" className="workDetails-continue-btn">
                Davam et
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WorkDetails;
