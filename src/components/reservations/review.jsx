const Review = ({
  setPage,
  date,
  time,
  occasion,
  diners,
  firstname,
  lastname,
  phone,
  email,
}) => {
  return (
    <>
      <h2>Review & Confirm</h2>
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
        <p className="editlink" onClick={() => setPage(1)}>
          Edit
        </p>
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
        <p className="editlink" onClick={() => setPage(0)}>
          Edit
        </p>
        <div className="form-control-button">
          <button onClick={() => setPage(1)}>Back</button>
          <button onClick={() => setPage(3)}>Next</button>
        </div>
      </form>
    </>
  );
};

export default Review;
