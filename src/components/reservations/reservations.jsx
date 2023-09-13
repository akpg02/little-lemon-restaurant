import { useRef } from "react";
import "./reservation.css";

const Reservation = ({
  setPage,
  setDate,
  setTime,
  setOccasion,
  setDiners,
  date,
  time,
  occasion,
  diners,
}) => {
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleDinerChange = (e) => {
    setDiners(e.target.value);
  };

  return (
    <>
      <form className="reservation-form">
        <div className="form-control">
          <p className="label">Select a date </p>
          <input
            type="date"
            name="date"
            value={date}
            id="date"
            onChange={handleDateChange}
            ref={dateInputRef}
            className={`label-input review`}
          />
        </div>
        <div className="form-control">
          <p className="label">Select a time </p>
          <input
            type="time"
            name="time"
            value={time}
            onChange={handleTimeChange}
            ref={timeInputRef}
            className={`label-input review`}
          />
        </div>
        <div className="form-control">
          <p className="label">Occasion </p>
          <select
            name="occasion"
            onChange={handleOccasionChange}
            defaultValue={occasion}
          >
            <option value="occasion">Select Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <div className="form-control">
          <p className="label">Number of Diners </p>
          <input
            className={`label-input review`}
            name="diners"
            value={diners}
            type="number"
            id="diners"
            min="1"
            onChange={handleDinerChange}
          />
        </div>
        <p className="required">Note: All fields are required</p>
        <div className="form-control-button">
          <button onClick={() => setPage(1)}>Next</button>
        </div>
      </form>
    </>
  );
};

export default Reservation;
