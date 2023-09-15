import "./reservation.css";

const ContactInfo = ({ setPage, state, dispatch }) => {
  const handleFirstNameChange = (e) => {
    dispatch({ type: "set_firstname", payload: e.target.value });
  };

  const handleLastNameChange = (e) => {
    dispatch({ type: "set_lastname", payload: e.target.value });
  };

  const handlePhoneChange = (e) => {
    dispatch({ type: "set_phone", payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "set_email", payload: e.target.value });
  };

  const previousPage = (e) => {
    e.preventDefault();
    setPage(0);
  };

  const nextPage = (e) => {
    e.preventDefault();
    setPage(2);
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
        <p className="required">Note: All fields are required</p>
        <div className="form-control-button">
          <button type="button" onClick={previousPage}>
            Back
          </button>
          <button type="button" onClick={nextPage}>
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactInfo;
