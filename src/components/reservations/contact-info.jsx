import { useState } from "react";
import "./reservation.css";

const errors = { firstname: null, lastname: null, phone: null, email: null };

const ContactInfo = ({ setPage, state, dispatch }) => {
  const [error, setError] = useState(errors);

  const handleFirstNameChange = (e) => {
    dispatch({ type: "set_firstname", payload: e.target.value });
    if (e.target.value === "") {
      setError({ ...error, firstname: "First name is required" });
    } else {
      setError({ ...error, firstname: null });
    }
  };

  const handleLastNameChange = (e) => {
    dispatch({ type: "set_lastname", payload: e.target.value });
    if (e.target.value === "") {
      setError({ ...error, lastname: "Last name is required" });
    } else {
      setError({ ...error, lastname: null });
    }
  };

  const handlePhoneChange = (e) => {
    dispatch({ type: "set_phone", payload: e.target.value });
    if (e.target.value === "") {
      setError({ ...error, phone: "Phone number is required" });
    } else {
      setError({ ...error, phone: null });
    }
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "set_email", payload: e.target.value });
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
      setError({ ...error, email: "Invalid email address" });
    } else {
      setError({ ...error, email: null });
    }
  };

  const previousPage = (e) => {
    e.preventDefault();
    setPage(0);
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (
      state.firstname.length > 0 &&
      state.lastname.length > 0 &&
      state.phone.length > 0 &&
      state.email.length > 0
    ) {
      setPage(2);
    }
  };

  return (
    <>
      <h2>Contact Information</h2>
      <form className="reservation-form">
        <div className="form-control">
          {/* <p className="label">First Name </p> */}
          <label htmlFor="firstname" className="label"></label>
          <input
            type="text"
            name="firstname"
            value={state.firstname}
            id="firstname"
            aria-label="firstname-input"
            data-testid="firstname"
            onChange={handleFirstNameChange}
            required
          />
        </div>
        {error.firstname !== null && (
          <p className="required">{error.firstname}</p>
        )}
        <div className="form-control">
          <p className="label">Last Name </p>
          <input
            type="text"
            name="lastname"
            value={state.lastname}
            onChange={handleLastNameChange}
            aria-label="lastname-input"
            data-testid="lastname"
            required
          />
        </div>
        {error.lastname !== null && (
          <p className="required">{error.lastname}</p>
        )}
        <div className="form-control">
          <p className="label">Phone Number </p>
          <input
            type="text"
            name="phone"
            value={state.phone}
            onChange={handlePhoneChange}
            aria-label="phone-input"
            data-testid="phone"
            required
          />
        </div>
        {error.phone !== null && <p className="required">{error.phone}</p>}
        <div className="form-control">
          <p className="label">Email </p>
          <input
            type="email"
            name="email"
            id="email"
            value={state.email}
            onChange={handleEmailChange}
            aria-label="email-input"
            data-testid="email"
            required
          />
        </div>
        {error.email !== null && <p className="required">{error.email}</p>}
        <div className="form-control-button">
          <button
            type="button"
            aria-label="back-button"
            data-testid="back"
            onClick={previousPage}
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextPage}
            aria-label="next-button"
            data-testid="next"
            disabled={
              state.firstname === "" ||
              state.lastname === "" ||
              state.email === "" ||
              state.phone === "" ||
              error.firstname ||
              error.lastname ||
              error.email ||
              error.phone
            }
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactInfo;
