import { useState } from "react";
import "./login.css";

const Login = () => {
  const [loginActive, setLoginActive] = useState(true);
  const [signUpActive, setSignUpActive] = useState(false);

  const handleLoginFormChange = () => {
    setLoginActive(true);
    setSignUpActive(false);
  };

  const handleSignupFormChange = () => {
    setSignUpActive(true);
    setLoginActive(false);
  };

  console.log("loginActive: ", loginActive);
  console.log("signupActive: ", signUpActive);

  return (
    <div className="form">
      <ul className="tab-group">
        <li
          className={`tab ${signUpActive ? "active" : ""}`}
          onClick={handleSignupFormChange}
        >
          <a href="#signup">Sign Up</a>
        </li>
        <li
          className={`tab ${loginActive ? "active" : ""}`}
          onClick={handleLoginFormChange}
        >
          <a href="#login">Log In</a>
        </li>
      </ul>
      <div className="tab-content">
        {signUpActive && (
          <div id="signup">
            <h1>Sign Up</h1>
            <form action="/" method="post">
              <div className="top-row">
                <div className="field-wrap">
                  <label>
                    First Name<span className="req">*</span>
                  </label>
                  <input type="text" required autoComplete="off" />
                </div>

                <div className="field-wrap">
                  <label>
                    Last Name<span className="req">*</span>
                  </label>
                  <input type="text" required autoComplete="off" />
                </div>
              </div>

              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input type="email" required autoComplete="off" />
              </div>

              <div className="field-wrap">
                <label>
                  Set A Password<span className="req">*</span>
                </label>
                <input type="password" required autoComplete="off" />
              </div>
              <button type="submit" className="button button-block">
                Get Started
              </button>
            </form>
          </div>
        )}
        {loginActive && (
          <div id="login">
            <h1>Welcome Back!</h1>

            <form action="/" method="post">
              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input type="email" required autoComplete="off" />
              </div>

              <div className="field-wrap">
                <label>
                  Password<span className="req">*</span>
                </label>
                <input type="password" required autoComplete="off" />
              </div>

              <p className="forgot">
                <a href="#/">Forgot Password?</a>
              </p>

              <button className="button button-block">Log In</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
