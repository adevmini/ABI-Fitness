import React from "react";
import "./RegisterPage.scss";
import { registerBannerImage } from "../../constants/assets";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
function RegisterPage() {
  return (
    <div className="container-fluid p-0 m-0 RegisterPage__wrapper">
      <div className="row p-0 m-0">
        <div className="col-lg-6 col-md-12 col-sm-12 p-0 m-0 RegisterPage__banner">
          <img
            src={registerBannerImage}
            alt="registerBannerImage"
            srcset={registerBannerImage}
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 p-0">
          <div className="RegisterPage__form__area">
            <div className="RegisterPage__form__area__form__wrapper">
              <div className="RegisterPage__form__area__form__headers mt-4">
                <img src="Logo.png" alt="Logo" />
                <div className="RegisterPage__form__area__form__headers__content">
                  <h1>SIGN UP</h1>
                  <small>Sign up to your account</small>
                </div>
              </div>
              <div className="RegisterPage__form__area__form mt-5">
                <div className="row m-0 p-0">
                  <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                    <Input placeholder="First Name" />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                    <Input placeholder="Last Name" />
                  </div>
                </div>
                <Input placeholder="User Name" />
                <Input placeholder="E-mail" type="email" />
                <Input placeholder="Age" />
                <Input placeholder="Weight" />
                <Input placeholder="Height" />
                <Input placeholder="Password" type="password" />
                <Input placeholder="Confirm Password" type="password" />
              </div>
              <button className="form__submit"> Sign up</button>
            </div>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
