import { Link } from "react-router-dom";
import { useState } from "react";
import { GamesProps } from "../../types";
import Button from "../button/button.component";
import { StoredGame } from "../../types";
import { currency } from "../../globals";

import { MdFavoriteBorder, MdFavorite } from "react-icons/Md";
import "./card.scss";

const Card = ({ game }: GamesProps) => {
  const { id, title, price, image } = game;

  const [isFavorite, setFavorite] = useState<boolean>(false);

  const storedFavoriteGamesJSON = localStorage.getItem("favoriteGames");
  const storedFavoriteGames = storedFavoriteGamesJSON
    ? JSON.parse(storedFavoriteGamesJSON)
    : [];

  const addFavoriteGame = (game: StoredGame) => {
    const newGame: StoredGame = {...game, favorite: true};
    storedFavoriteGames.push(newGame);
    localStorage.setItem("favoriteGames", JSON.stringify(storedFavoriteGames));
  };

  const removeFavoriteGame = (gameId: number) => {
    const updateFavoriteGames = storedFavoriteGames.filter(
      (item: StoredGame) => item.id !== gameId
    );
    localStorage.setItem("favoriteGames", JSON.stringify(updateFavoriteGames));
  };
  const toggleFavorite = () => {
    setFavorite(!isFavorite);
    if (!isFavorite) {
      addFavoriteGame(game);
    } else {
      removeFavoriteGame(id);
      alert(id);
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
