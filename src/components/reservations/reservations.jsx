import { useRef, useEffect } from "react";
import "./reservation.css";

const Reservation = ({ setPage, state, dispatch }) => {
  useEffect(() => {
    dispatch({ type: "set_date", payload: state.date });
    dispatch({ type: "update_date", payload: state.date });
  }, [dispatch, state.date]);

  const dateInputRef = useRef(null);

  const handleDateChange = (e) => {
    dispatch({ type: "set_date", payload: e.target.value });
  };

  const handleTimeChange = (e) => {
    dispatch({ type: "set_time", payload: e.target.value });
  };

  const handleOccasionChange = (e) => {
    dispatch({ type: "set_occasion", payload: e.target.value });
  };

  const handleDinerChange = (e) => {
    dispatch({ type: "set_diners", payload: e.target.value });
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (state.time.length > 0 && state.occasion.length > 0) {
      setPage(1);
    }
  };

  return (
    <>
      <form className="reservation-form">
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
            required
          />
        </div>
        <div className="form-control">
          <p className="label">Select a time </p>
          <select
            name="time"
            onChange={handleTimeChange}
            defaultValue={state.time}
            required
          >
            <option value="Select a time">Select a time</option>
            {state.times &&
              state.times.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
          </select>
        </div>
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
            <option value="occasion">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <p className="required">Note: All fields are required</p>
        <div className="form-control-button">
          <button type="button" onClick={nextPage}>
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Reservation;
