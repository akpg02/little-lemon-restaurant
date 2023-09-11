import "./aboutus.css";
import Restaurant from "../../images/restaurant.jpg";
import RestaurantChef from "../../images/restaurant-chef-B.jpg";

const AboutUs = () => {
  return (
    <>
      <h2 className="about-us-title">About Us</h2>
      <div className="aboutus-section">
        <section className="aboutus-text-section">
          <p className="aboutus-title">Little Lemon</p>
          <p className="aboutus-location">Chicago</p>
          <p className="aboutus-description">
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
        </section>
        <section className="images">
          <div className="image-one">
            <img src={Restaurant} alt="restaurant" />
          </div>
          <div className="image-two">
            <img src={RestaurantChef} alt="restaurant and chef" />
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutUs;
