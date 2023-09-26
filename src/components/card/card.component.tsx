import "./card.scss";
import { GamesProps } from "../../types";
import CardHeader from "./card-header/card.header.component";
import CardImage from "./card-image/card-image.component";
import CardPrice from "./card-price/card-price.component";

const Card = ({ game }: GamesProps) => {
  return (
    <div className="card">
      <CardImage image={game.image} title={game.title}/>
      <div className="card-footer">
      <div className="card-footer__block">
        <CardHeader title={game.title} />
        <CardPrice price={game.price} />
      </div>
      <button>Buy</button>
      </div>
    </div>
  );
};

export default Card;
