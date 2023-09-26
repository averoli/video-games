import "./card.scss";
import { GamesProps } from "../../types";
import CardHeader from "./card-header/card.header.component";
import CardImage from "./card-image/card-image.component";
import CardPrice from "./card-price/card-price.component";

const Card = ({ game }: GamesProps) => {
  return (
    <div className="card">
      <CardImage image={game.image} />
      <div>
        <CardHeader title={game.title} />
        <CardPrice price={game.price} />
      </div>
    </div>
  );
};

export default Card;
