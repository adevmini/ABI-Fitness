import React from "react";
import "./Login.scss";
import Input from "../../components/Input";
import {
  loginBannerImage,
  passwordIcon,
  userIcon,
} from "../../constants/assets";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div className="container-fluid p-0 m-0 LoginPage__wrapper">
      <div className="row p-0 m-0">
        <div className="col-lg-6 col-md-12 col-sm-12 p-0 m-0 LoginPage__banner">
          <img
            src={loginBannerImage}
            alt="loginBannerImage"
            srcset={loginBannerImage}
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 p-0">
          <div className="LoginPage__form__area">
            <img src="Logo.png" alt="Logo" />
            <div className="LoginPage__form__area__form__wrapper">
              <div className="LoginPage__form__area__form__headers">
                <h1>LOGIN</h1>
                <small>Sign in to your account</small>
              </div>
              <div className="LoginPage__form__area__form mt-5">
                <Input icon={userIcon} placeholder="User Name" />
                <Input
                  icon={passwordIcon}
                  placeholder="Password"
                  type="password"
                />
              </div>
              <Link to="/forget-password">Forgot password?</Link>
              <button className="form__submit"> Sign in</button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
