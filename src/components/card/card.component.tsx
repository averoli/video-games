import { Link } from "react-router-dom";
import { useFavorite } from "../../games-context";
import { GamesProps } from "../../types";
import Button from "../button/button.component";
import { MdFavoriteBorder, MdFavorite } from "react-icons/Md";

import { currency } from "../../globals";

import "./card.scss";

const Card = ({ game }: GamesProps) => {
  const { id, title, price, image } = game;

  const { favoriteList, addFavoriteGame, removeFavoriteGame } = useFavorite();

  const isFavorite = favoriteList.some((item) => item.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteGame(id);
    } else {
      addFavoriteGame(game);
    }
  };

  const handleClickBuy = (id: number) => {
    alert(`Buy ${id}`);
  };

  const handleClickDetails = (id: number) => {
    console.log(id);
  };
  const favoriteStyle = { color: "#dc1524", fontSize: "1.5em" };
  const favoriteBorderStyle = { color: "#dc1524", fontSize: "1.5em" };

  return (
    <div className="card">
      <div className="card-image">
        <div className="favorite-icon" onClick={() => toggleFavorite()}>
          {isFavorite ? (
            <MdFavorite style={favoriteStyle} />
          ) : (
            <MdFavoriteBorder style={favoriteBorderStyle} />
          )}
        </div>
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
          <Link to={`/video-games/${id}`} key={id} state={{ game }}>
            <Button onClick={() => handleClickDetails(id)}>VER DETAILS</Button>
          </Link>
          <Button onClick={() => handleClickBuy(id)}>BUY NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
