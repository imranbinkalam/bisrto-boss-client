import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logInImg from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";
import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";

const LogIn = () => {
  const [disable, setDisable] = useState(true);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire("Login Successfully");
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Log In</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full sm:flex-col md:flex-row ">
          <div className="text-center lg:text-left md:w-1/2">
            <img src={logInImg} alt="" />
          </div>
          <div className="card md:w-full flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-center text-4xl font-bold pt-5">Login now!</h1>
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  placeholder="type the text"
                  className="input input-bordered"
                />
              </div>
              {/* // TODO make button dissable  */}
              <div className="form-control mt-6">
                <input
                  disabled={disable}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <h6 className="text-center mb-6">
              <small>
                New Here?{" "}
                <Link to="/signup" className="font-bold text-blue-400">
                  Create an Account
                </Link>
              </small>
            </h6>
            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
