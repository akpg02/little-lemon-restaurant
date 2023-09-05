import React from "react";
import LargeHeader from "../largeHeader/largeHeader";
import "./Main.css";
import { data } from "./data";
import Card from "../card/card";

function Main() {
  return (
    <main>
      <LargeHeader />
      <div className="specials">
        <section className="specials-heading">
          <p>This weeks specials!</p> <button>Online Menu</button>
        </section>
        <div className="allcard-container">
          {data.map((e) => (
            <Card data={e} key={e.title} />
          ))}
        </div>
      </div>
      <div className="testimonials">this is the testimonials section</div>
      <div className="about-section">This is the about section....</div>
    </main>
  );
}

export default Main;
