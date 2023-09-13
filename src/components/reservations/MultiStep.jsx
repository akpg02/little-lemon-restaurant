import { useState } from "react";

import "./reservation.css";
import Reservation from "./reservations";
import ContactInfo from "./contact-info";
import Review from "./review";
import Confirmation from "./confirmation";

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
  let hours = now.getHours();
  let mins = now.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;

  return hours + ":" + mins;
};

const MultiStep = () => {
  const [page, setPage] = useState(0);
  const [date, setDate] = useState(getDate());
  const [time, setTime] = useState(getTime());
  const [occasion, setOccasion] = useState("");
  const [diners, setDiners] = useState(1);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const resetForm = () => {
    setPage(0);
    setOccasion("");
    setDiners(1);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
  };
  const conditionalPage = () => {
    switch (page) {
      case 0:
        return (
          <Reservation
            setDate={setDate}
            setTime={setTime}
            setOccasion={setOccasion}
            setDiners={setDiners}
            setPage={setPage}
            date={date}
            time={time}
            occasion={occasion}
            diners={diners}
          />
        );
      case 1:
        return (
          <ContactInfo
            setPage={setPage}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setPhone={setPhone}
            setEmail={setEmail}
            firstname={firstname}
            lastname={lastname}
            phone={phone}
            email={email}
          />
        );
      case 2:
        return (
          <Review
            setPage={setPage}
            date={date}
            time={time}
            occasion={occasion}
            diners={diners}
            firstname={firstname}
            lastname={lastname}
            phone={phone}
            email={email}
          />
        );
      case 3:
        return (
          <Confirmation
            setPage={setPage}
            date={date}
            time={time}
            occasion={occasion}
            diners={diners}
            firstname={firstname}
            lastname={lastname}
            phone={phone}
            email={email}
            resetForm={resetForm}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="reservation-heading">
        <p className="reservation-title">Reserve a Table</p>
      </div>
      <div className="form-container">{conditionalPage()}</div>
    </>
  );
};

export default MultiStep;
