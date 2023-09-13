import "./reservation.css";

const ContactInfo = ({
  setPage,
  setFirstName,
  setEmail,
  setPhone,
  setLastName,
  firstname,
  lastname,
  phone,
  email,
}) => {
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
            value={firstname}
            id="firstname"
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-control">
          <p className="label">Last Name </p>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="form-control">
          <p className="label">Phone Number </p>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="form-control">
          <p className="label">Email </p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <p className="required">Note: All fields are required</p>
        <div className="form-control-button">
          <button onClick={() => setPage(0)}>Back</button>
          <button onClick={() => setPage(2)}>Next</button>
        </div>
      </form>
    </>
  );
};

export default ContactInfo;
