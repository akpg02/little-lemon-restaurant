import "./reservation.css";

const Confirmation = ({
  setPage,
  date,
  time,
  occasion,
  diners,
  firstname,
  lastname,
  phone,
  email,
  resetForm,
}) => {
  return (
    <>
      <h2 className="success-confirm">Success! Table Reserved</h2>
      <section>
        <div className="line"></div>
        <p className="reservation-section">Contact Information</p>
        <div className="line"></div>
      </section>
      <form className="reservation-form">
        <div className="form-control">
          <p className="label">First Name </p>
          <input
            type="text"
            name="firstname"
            value={firstname}
            id="firstname"
            className={`label-input review`}
            readOnly
          />
        </div>
        <div className="form-control">
          <p className="label">Last Name </p>
          <input
            type="text"
            name="lastname"
            value={lastname}
            className={`label-input review`}
            readOnly
          />
        </div>
        <div className="form-control">
          <p className="label">Phone Number </p>
          <input
            type="text"
            name="phone"
            value={phone}
            className={`label-input review`}
            readOnly
          />
        </div>
        <div className="form-control">
          <p className="label">Email </p>
          <input
            type="email"
            name="email"
            value={email}
            className={`label-input review`}
            readOnly
          />
        </div>
      </form>
      <section>
        <div className="line"></div>
        <p className="reservation-section">Reservation Details</p>
        <div className="line"></div>
      </section>
      <form className="reservation-form">
        <div className="form-control">
          <p className="label">date </p>
          <input
            className={`label-input review`}
            name="date"
            type="date"
            value={date}
            id="date"
            readOnly
          />
        </div>
        <div className="form-control">
          <p className="label">time </p>
          <input
            className={`label-input review`}
            type="time"
            name="time"
            value={time}
            readOnly
          />
        </div>
        <div className="form-control">
          <p className="label">Occasion </p>
          <input className={`label-input review`} value={occasion} readOnly />
        </div>
        <div className="form-control">
          <p className="label">Number of Diners </p>
          <input
            className={`label-input review`}
            name="diners"
            value={diners}
            id="diners"
            readOnly
          />
        </div>
        <div className="form-control-button">
          <button onClick={() => resetForm()}>New Reservation</button>
        </div>
      </form>
    </>
  );
};

export default Confirmation;
