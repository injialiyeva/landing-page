import React, { Component } from "react";
import "../WorkDetails/workDetails.scss";

class WorkDetails extends Component {
  render() {
    return (
      <div className="workDetails">
        <form action="" className="workDetails-form">
          <div className="workDetails-inputs">
            <div>
              <div className="workDetails-company">
                <label htmlFor="">
                  İş yeri <span>*</span>
                  <div className="workDetails-company-input">
                    <input type="text" required />
                  </div>
                </label>
              </div>
              <div className="workDetails-salary">
                <label htmlFor="">
                  Gəlir <span>*</span>
                  <div className="workDetails-salary-input">
                    <input type="number" name="" id="" />
                  </div>
                </label>
              </div>
            </div>
            <div>
              <div className="workDetails-work-exp">
                <label htmlFor="">
                  İş təcrübəsi <span>*</span>
                  <div className="workDetails-work-exp-selects">
                    <select name="" id="">
                      <option value="">1 il</option>
                      <option value="">3 il</option>
                      <option value="">5 il</option>
                    </select>
                  </div>
                </label>
              </div>
              <div className="workDetails-salary-add">
                <label htmlFor="">
                  Əlavə gəliriniz
                  <input type="text" />
                </label>
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
          </div>
          <div className="workDetails-buttons">
            <div className="workDetails-back-btn">
              <button type="submit"></button>
            </div>
            <div className="workDetails-continue-btn">
              <button type="submit"></button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default WorkDetails;
