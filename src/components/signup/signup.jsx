import "./signup.css";

const SignUpForm = () => {
  return (
    <>
      <div className="signup-box">
        <input type="text" className="name ele" placeholder="Full name" />
        <input type="email" className="email ele" placeholder="Email address" />
        <input
          type="password"
          className="password ele"
          placeholder="Password"
        />
        <input
          type="password"
          className="confirm-password ele"
          placeholder="Confirm password"
        />
        <button className="clkbtn">Sign Up</button>
      </div>
    </>
  );
};

export default SignUpForm;
