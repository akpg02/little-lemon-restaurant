import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/aboutus";
import Main from "./components/main/Main";
import Booking from "./components/reservations/MultiStep.jsx";
import Menu from "./components/menu/menu";
import OrderOnline from "./components/order-online/order-online";
import Login from "./components/login/login";

const Times = [
  {
    date: "2023-09-13",
    times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  },
  {
    date: "2023-09-14",
    times: ["17:00", "18:00", "19:00"],
  },
  {
    date: "2023-09-15",
    times: ["20:00", "21:00", "22:00"],
  },
];

function App() {
  const [selectedTime, setAvailableTimes] = useState("");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route
          path="/reservations"
          element={
            <Booking
              selectedTime={selectedTime}
              setAvailableTimes={setAvailableTimes}
              times={Times}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
