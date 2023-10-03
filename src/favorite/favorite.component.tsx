import { useState, useEffect } from "react";
import { CardProps } from "../types";

const Favorite = () => {
  const [favoriteGamesData, setFavoriteGames] = useState<CardProps[]>([]);

  useEffect(() => {
    const favoriteGameKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("favorite_")
    );
    const favoriteGamesData = favoriteGameKeys.map((key) => {
      const gameId = parseInt(key.replace("favorite_", ""));
      const gameData = JSON.parse(localStorage.getItem(key) || "{}");
      return { id: gameId, ...gameData };
    });
    setFavoriteGames(favoriteGamesData);
    console.log(favoriteGamesData);
  }, []);

  return (
    <div>
      {favoriteGamesData.map((favoritGame) => (
        <li>{favoritGame.id}</li>
      ))}
    </div>
  );
};

export default Favorite;