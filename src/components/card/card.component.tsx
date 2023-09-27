import { Link } from "react-router-dom";
import "./card.scss";
import { currency } from "../../App";
import { GamesProps } from "../../types";
import Button from "../button/button.component";

const Card = ({ game, id }: GamesProps & { id: number }) => {
  const { title, price, description, image } = game;

  const handleClickBuy = (id: number) => {
    alert(`Buy ${id}`);
  };

  const handleClickDetails = (id: number) => {
    alert(`Ver details ${id}`);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-footer">
        <div className="card-footer__block">
          <p className="card-header">{title}</p>
          <p className="card-price">
            {price} {currency}
          </p>
        </div>
        <div className="card-footer__block-buttons">
          <Link
            to={`/video-games/${id}`}
            key={id}
            state={{ from: { id, title, price, description, image } }}
          >
            <Button onClick={() => handleClickDetails(id)}>VER DETAILS</Button>
          </Link>

          <Button onClick={() => handleClickBuy(id)}>BUY NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
