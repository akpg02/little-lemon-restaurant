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
    if (e.target.value === "") {
      setError({ ...error, email: "Email address is required" });
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
          <p className="label">First Name </p>
          <input
            type="text"
            name="firstname"
            value={state.firstname}
            id="firstname"
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
            required
          />
        </div>
        {error.phone !== null && <p className="required">{error.phone}</p>}
        <div className="form-control">
          <p className="label">Email </p>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleEmailChange}
            required
          />
        </div>
        {error.email !== null && <p className="required">{error.email}</p>}
        <div className="form-control-button">
          <button type="button" onClick={previousPage}>
            Back
          </button>
          <button
            type="button"
            onClick={nextPage}
            disabled={
              state.firstname === "" ||
              state.lastname === "" ||
              state.email === "" ||
              state.phone === ""
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
