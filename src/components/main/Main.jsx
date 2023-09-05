import React from "react";
import { NavLink } from "react-router-dom";
import "./Main.css";
import { data } from "./data";
import Card from "../card/card";
import LargeHeader from "../largeHeader/largeHeader";
import Testimonials from "../testimonials/testimonial";
import AboutUs from "../AboutUs/aboutus";

function Main() {
  return (
    <main>
      <LargeHeader />
      <div className="specials">
        <section className="specials-heading">
          <p>This weeks specials!</p>{" "}
          <button>
            <NavLink to="/menu">Online Menu</NavLink>
          </button>
        </section>
        <div className="allcard-container">
          {data.map((e) => (
            <Card data={e} key={e.title} />
          ))}
        </div>
      </div>
      <Testimonials />
      <AboutUs />
    </main>
  );
}

export default Main;
