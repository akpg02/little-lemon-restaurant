import "./star-rating.css";

const StarRating = ({ stars }) => {
  return (
    <div className="star-rating">
      {[...Array(stars)].map(() => (
        <span key={Math.random() * 200} className="star">
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
