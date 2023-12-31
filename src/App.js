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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/little-lemon-restaurant" element={<Main />} />
        <Route path="/reservations" element={<Booking />} />
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
