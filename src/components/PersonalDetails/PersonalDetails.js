import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftUp from "../../pages/LimitRequestLeftUp/LeftUp";
import { AccountContext } from "../../AccountContext";
import { addName } from "../../store/inputSlice";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import "../../pages/LimitRequestLeftUp/leftUp.scss";
import "../PersonalDetails/personalDetails.scss";

// { name, fin, surname, fatherName, changeDetails }

function PersonalDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.name);
  const { handleSubmit } = useForm({ defaultValues: { name } });

  const onSubmit = (data) => {
    Next();
    Previous();
  };

  const Next = (data) => {
    dispatch(addName(data.name));
    navigate("/LimitRequest/2");
  };

  const Previous = (data) => {
    dispatch(addName(data.name));
    navigate("/Login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // changeDetails(value);
    // setDetails((prev) => {
    //   return { ...prev, [name]: value };
    // });
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    if (!isActive) {
      setIsActive((current) => !current);
    }
  };

  const cancelClick = (event) => {
    setIsActive((current) => !current);
  };

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <div>
      {/* <div>{message}</div> */}
      <div className="personalDetails-main-con">
        <LeftUp />
        <div className="personalDetails">
          <form
            action=""
            className="personalDetails-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="personalDetails-inputs">
              <div className="personalDetails-inputs-name-fin">
                <div className="personDetails-name">
                  <label htmlFor="">
                    Ad <span>*</span>
                    <div className="personDetails-name-input personDetails-input">
                      <input
                        type="text"
                        required
                        id="name"
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
                <div className="personalDetails-fin">
                  <label htmlFor="">
                    F??N kod <span>*</span>
                    <div className="personalDetails-fin-input personDetails-input">
                      <input
                        type="text"
                        required
                        id="fin"
                        maxLength={7}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className="info-btn-personalDetails"
                        onClick={handleClick}
                      >
                        <img
                          className="popup-icon-personalDetails"
                          src="/images/general icons (2).svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </label>
                </div>
              </div>
              <div className="personalDetails-inputs-bottom">
                <div className="personalDetails-inputs-surname-fathername">
                  <div className="personalDetails-surname">
                    <label htmlFor="">
                      Soyad <span>*</span>
                      <div className="personalDetails-surname-input personDetails-input">
                        <input
                          type="text"
                          required
                          id="surname"
                          onChange={handleChange}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="personalDetails-fathername">
                    <label htmlFor="">
                      Ata ad?? <span>*</span>
                      <div className="personalDetails-fathername-input personDetails-input">
                        <input
                          type="text"
                          required
                          id="fatherName"
                          onChange={handleChange}
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="personalDetails-id-div">
                  <p>
                    ????xsiyy??t v??siq??si <span>*</span>
                  </p>
                  {/* <label htmlFor="">
                    ????xsiyy??t v??siq??si <span>*</span>
                  </label> */}
                  <div className="personalDetails-id-inputs">
                    <div className="personalDetails-id-input">
                      <label htmlFor="id-input1">
                        <div className="label">
                          <img src="/images/pic-icon.svg" alt="" />
                          <p>??n ??z??n?? y??kl??</p>
                        </div>
                      </label>
                      <input
                        id="id-input1"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={onImageChange}
                      />
                      {imageURLs.map((imageSrc) => (
                        <img src={imageSrc} />
                      ))}
                    </div>
                    <div className="personalDetails-id-input">
                      <label htmlFor="id-input2">
                        <div className="label">
                          <img src="/images/pic-icon.svg" alt="" />
                          <p>Arxa ??z??n?? y??kl??</p>
                        </div>
                      </label>
                      <input
                        id="id-input2"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={onImageChange}
                      />
                      {imageURLs.map((imageSrc) => (
                        <img src={imageSrc} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={isActive ? "fin-popup-personal-d" : "hidden"}>
                <div className="fin-popup-header-personal-d">
                  <img
                    className="fin-popup-icon-personal-d"
                    src="/images/general icons(4).svg"
                  />
                  <p className="fin-nedir-personal-d">F??N n??dir?</p>
                  <button
                    type="button"
                    className={isActive ? "popup-cancel-personal-d" : "hidden"}
                    onClick={cancelClick}
                  >
                    <img src="/images/general icons(5).svg" />
                  </button>
                </div>
                <div className="fin-popup-txt-login">
                  <p>
                    F??N kod 7 simvoldan ibar??tdir v?? ax??r??nc?? s??tird?? g??st??ril??n
                    son s??kkiz simvolun ilk yeddisi t????kil edir.
                  </p>
                </div>
                <div>
                  <img src="/images/v??siq?? foto.svg" />
                </div>
              </div>
            </div>
            <div className="personalDetails-buttons">
              <button
                className="personalDetails-skip-btn"
                type="button"
                onClick={Previous()}
              >
                Bu m??rh??l??ni ke??
              </button>

              <button
                className="personalDetails-continue-btn"
                type="button"
                // onClick={() => navigate("/LimitRequest/2")}
                onClick={Next()}
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

export default PersonalDetails;
