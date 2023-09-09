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
          <box-icon name="quote-alt-left" type="solid"></box-icon>
          {card.review}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
