import { useState } from "react";
import { Link } from "react-router-dom";
import "./card.scss";
import { currency } from "../../globals";
import { GamesProps } from "../../types";
import Button from "../button/button.component";
import { MdFavoriteBorder, MdFavorite } from "react-icons/Md";

const Card = ({ game }: GamesProps) => {
  const { id, title, price, image } = game;

  const [isFavorite, setFavorite] = useState<boolean>(false);

  const toggleFavorite = () => {
    const storedFavoriteGamesJSON = localStorage.getItem("favoriteGames");
    const storedFavoriteGames = storedFavoriteGamesJSON
      ? JSON.parse(storedFavoriteGamesJSON)
      : [];
    setFavorite(!isFavorite);
    if (!isFavorite) {
      const newGame = game;
      storedFavoriteGames.push(newGame);
      localStorage.setItem(
        "favoriteGames",
        JSON.stringify(storedFavoriteGames)
      );
    } else {
      const gameIdToRemove = id;
      storedFavoriteGames.filter(item => item.id !== gameIdToRemove)
    }
  };
  const handleClickBuy = (id: number) => {
    alert(`Buy ${id}`);
  };

  const handleClickDetails = (id: number) => {
    console.log(id);
  };

  return (
    <div className="card">
      <div className="card-image">
        <div className="favorite-icon" onClick={toggleFavorite}>
          {isFavorite ? (
            <MdFavorite style={{ color: "#dc1524", fontSize: "1.5em" }} />
          ) : (
            <MdFavoriteBorder style={{ color: "#dc1524", fontSize: "1.5em" }} />
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
