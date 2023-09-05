import { NavLink } from "react-router-dom";
import "./largeHeader.css";
import restaurant from "../../images/restauranfood.jpg";

const LargeHeader = () => {
  return (
    <div className="large-header">
      <div className="large-header inner-container">
        <div className="large-header section">
          <span className="title">Little Lemon</span>
          <span className="state">Chicago</span>
          <span className="paragraph">
            We are a family owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist.
          </span>
          <button>
            <NavLink to="/reservations">Reserve a Table</NavLink>
          </button>
        </div>
        <div className="home-page-image">
          <img src={restaurant} alt="restaurant" />
        </div>
      </div>
    </div>
  );
};

export default LargeHeader;
