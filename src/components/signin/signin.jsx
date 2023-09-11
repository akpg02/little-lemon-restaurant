import "./signin.css";

const SignInForm = () => {
  return (
    <>
      <div className="login-box">
        <input type="email" className="email ele" placeholder="Email address" />
        <input
          type="password"
          className="password ele"
          placeholder="Password"
        />
        <button className="clkbtn">Log In</button>
      </div>
    </>
  );
};

export default SignInForm;
