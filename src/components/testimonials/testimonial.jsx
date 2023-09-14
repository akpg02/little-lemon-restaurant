import StarRating from "../star-rating/star-rating";
import "./testimonials.css";

const Testimonials = ({ card }) => {
  return (
    <>
      <div className="testimonial-card">
        <div className="rating">
          <span className="list-stars">
            {<StarRating stars={card.stars} />}
          </span>
        </div>
        <div className="image-name-container">
          <div className="image-container">
            <img src={require(`../../images/${card.img}`)} alt={card.name} />
          </div>
          <div className="image-name">{card.name}</div>
        </div>
        <div className="testimonial-review">
          <i className="fa fa-quote-left" aria-hidden="true"></i>
          {card.review}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
