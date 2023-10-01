import { useRef, useEffect, useState } from "react";
import "./reservation.css";

const getDate = () => {
  const now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();

  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;

  return y + "-" + m + "-" + d;
};

const errors = { time: null, occasion: null };

const Reservation = ({
  setPage,
  state,
  dispatch,
  updateTimes,
  message,
  setMessage,
}) => {
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

  const [error, setError] = useState(errors);

  const handleDateChange = async (e) => {
    dispatch({ type: "set_date", payload: e.target.value });
    updateTimes(e.target.value);
    dispatch({ type: "update_date", payload: state.times });
    setMessage("");
  };

  const handleTimeChange = (e) => {
    if (
      e.target.value.toLowerCase() === "default" ||
      e.target.value.length <= 0
    ) {
      setError({ ...error, time: "Time is required" });
    } else {
      setError({ ...error, time: null });
      dispatch({ type: "set_time", payload: e.target.value });
    }
  };

  const handleOccasionChange = (e) => {
    if (
      e.target.value.toLowerCase() === "default" ||
      e.target.value.length <= 0
    ) {
      setError({ ...error, occasion: "Occasion is required" });
    } else {
      setError({ ...error, occasion: null });
      dispatch({ type: "set_occasion", payload: e.target.value });
    }
  };

  const handleDinerChange = (e) => {
    dispatch({ type: "set_diners", payload: e.target.value });
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (error.time === null && error.occasion === null) {
      setPage(1);
    }
  };

  useEffect(() => {
    if (state.date === getDate()) {
      updateTimes(getDate());
    }
  }, [dispatch, state.date, updateTimes]);

  return (
    <>
      <form className="reservation-form">
        {message ? <p className="message">{message}</p> : null}
        <div className="form-control">
          <p className="label">Select a date </p>
          <input
            type="date"
            name="date"
            value={state.date}
            id="date"
            onChange={handleDateChange}
            ref={dateInputRef}
            className={`label-input review`}
            aria-label="date-input"
            required
          />
        </div>
        <div className="form-control">
          <p className="label">Select a time </p>
          <select
            name="time"
            onChange={handleTimeChange}
            defaultValue={state.time}
            ref={timeInputRef}
            aria-label="time-input"
            data-testid="time"
            required
            role="combobox"
          >
            <option value="default" data-testid="select-option">
              Select a time
            </option>
            {state.times &&
              state.times.map((el) => (
                <option key={el} value={el} data-testid="select-option">
                  {el}
                </option>
              ))}
          </select>
        </div>
        {error.time !== null && <p className="required">{error.time}</p>}
        <div className="form-control">
          <p className="label">Number of Guests </p>
          <input
            className={`label-input review`}
            name="diners"
            value={state.diners}
            type="number"
            id="diners"
            min="1"
            onChange={handleDinerChange}
            required
          />
        </div>
        <div className="form-control">
          <p className="label">Occasion </p>
          <select
            name="occasion"
            onChange={handleOccasionChange}
            defaultValue={state.occasion}
            required
          >
            <option value="default">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        {error.occasion !== null && (
          <p className="required">{error.occasion}</p>
        )}

        <div className="form-control-button">
          <button
            type="button"
            onClick={nextPage}
            disabled={state.time === "" || state.occasion === ""}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Reservation;
