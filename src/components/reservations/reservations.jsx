import { useRef, useState } from "react";
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

const getTime = () => {
  const now = new Date();
  const time = now.getHours() + ":" + now.getMinutes();
  return time;
};

const Reservation = () => {
  const [date, setDate] = useState(getDate());
  const [time, setTime] = useState(getTime());
  const [occasion, setOccasion] = useState("");
  const [diners, setDiners] = useState(1);

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

  console.log(occasion);

  return (
    <>
      <div className="reservation-heading">
        <p className="reservation-title">Reserve a Table</p>
      </div>
      <div className="form-container">
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
              className="label-input"
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
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Reservation;
