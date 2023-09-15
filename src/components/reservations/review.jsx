const Review = ({
  setPage,
  state,
  submitForm,
  confirmed,
  dispatch,
  resetForm,
}) => {
  const previousPage = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <>
      {confirmed ? (
        <h2 className="success-confirm">Success! Table Reserved</h2>
      ) : (
        <h2>Review & Confirm</h2>
      )}
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
            value={state.firstname}
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
            value={state.lastname}
            className={`label-input review`}
            readOnly
          />
        </div>
        <div className="form-control">
          <p className="label">Phone Number </p>
          <input
            type="text"
            name="phone"
            value={state.phone}
            className={`label-input review`}
            readOnly
          />
        </div>
        <div className="form-control">
          <p className="label">Email </p>
          <input
            type="email"
            name="email"
            value={state.email}
            className={`label-input review`}
            readOnly
          />
        </div>
        {!confirmed && (
          <p className="editlink" onClick={() => setPage(1)}>
            Edit
          </p>
        )}
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
            value={state.date}
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
            value={state.time}
            readOnly
          />
        </div>
        <div className="form-control">
          <p className="label">Occasion </p>
          <input
            className={`label-input review`}
            value={state.occasion}
            readOnly
          />
        </div>
        <div className="form-control">
          <p className="label">Number of Diners </p>
          <input
            className={`label-input review`}
            name="diners"
            value={state.diners}
            id="diners"
            readOnly
          />
        </div>
        {!confirmed && (
          <p className="editlink" onClick={() => setPage(0)}>
            Edit
          </p>
        )}
        <div className="form-control-button">
          {confirmed ? (
            <button type="button" onClick={resetForm}>
              New Reservation
            </button>
          ) : (
            <>
              <button type="button" aria-label="back" onClick={previousPage}>
                Back
              </button>
              <button
                aria-label="confirm"
                id="button"
                type="submit"
                onClick={submitForm}
              >
                Confirm
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Review;
