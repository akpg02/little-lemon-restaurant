import { useState, useReducer, useCallback } from "react";

import "./reservation.css";
import Reservation from "./reservations";
import ContactInfo from "./contact-info";
import Review from "./review";
import { fetchAPI, submitAPI } from "../../api";

const getDate = () => {
  const now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();

  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;

  return y + "-" + m + "-" + d;
};

const initState = {
  date: getDate(),
  occasion: "",
  diners: 1,
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  times: [],
  time: "",
};

const MultiStep = () => {
  const [page, setPage] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [message, setMessage] = useState("");

  const reducer = (state = initState, action) => {
    switch (action.type) {
      case "update_date": {
        return {
          ...state,
          times: action.payload,
        };
      }
      case "set_date": {
        return { ...state, date: action.payload };
      }
      case "set_occasion": {
        return { ...state, occasion: action.payload };
      }
      case "set_diners": {
        return { ...state, diners: action.payload };
      }
      case "set_firstname": {
        return { ...state, firstname: action.payload };
      }
      case "set_lastname": {
        return { ...state, lastname: action.payload };
      }
      case "set_phone": {
        return { ...state, phone: action.payload };
      }
      case "set_email": {
        return { ...state, email: action.payload };
      }
      case "set_time": {
        return { ...state, time: action.payload };
      }
      case "reset_form": {
        setPage(0);
        return { ...state, ...initState };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const updateTimes = useCallback(async (date) => {
    try {
      const data = await fetchAPI(date);
      dispatch({ type: "update_date", payload: data });
    } catch (error) {
      dispatch({ type: "update_date", payload: [] });
      setMessage(error.message);
    }
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      submitAPI(state);
      setMessage("Success! Reservation Confirmed!");

      setConfirmed(true);
    } catch (error) {
      setMessage("An Error Occurred While Reserving a Table");
      setConfirmed(false);
    }
  };

  const resetForm = (e) => {
    e.preventDefault();
    setMessage("");
    setConfirmed(false);
    dispatch({ type: "reset_form" });
  };

  const conditionalPage = () => {
    switch (page) {
      case 0:
        return (
          <Reservation
            setPage={setPage}
            state={state}
            dispatch={dispatch}
            updateTimes={updateTimes}
            message={message}
            setMessage={setMessage}
          />
        );
      case 1:
        return (
          <ContactInfo setPage={setPage} state={state} dispatch={dispatch} />
        );
      case 2:
        return (
          <Review
            setPage={setPage}
            state={state}
            dispatch={dispatch}
            submitForm={submitForm}
            message={message}
            setMessage={setMessage}
            resetForm={resetForm}
            confirmed={confirmed}
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
