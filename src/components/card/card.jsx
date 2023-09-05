import "./card.css";

const Card = ({ data }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-container-img">
          <img src={require(`../../images/${data.image}`)} alt={data.title} />
        </div>
        <div className="card-container-section">
          <div className="card-title-cost">
            <span className="title">{data.title}</span>
            <span className="cost">${data.cost.toFixed(2)}</span>
          </div>
          <div className="card-description">{data.description}</div>
          <button className="link">{data.link}</button>
        </div>
      </div>
    </>
  );
};

export default Card;
