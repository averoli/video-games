import { createContext, useContext, useState } from "react";
import { StoredGame } from "./types";
export const FavoriteContext = createContext(null);

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export const FavoriteProvider = ({ children }) => {
  const [favoriteGames, setFavoriteGames] = useState([]);
  const [isFavorite, setFavorite] = useState<boolean>(false);

  const storedFavoriteGamesJSON = localStorage.getItem("favoriteGames");

  const storedFavoriteGames = storedFavoriteGamesJSON
    ? JSON.parse(storedFavoriteGamesJSON)
    : ([] as StoredGame[]);
  setFavorite(!isFavorite);

  const addFavoriteGame = (game: StoredGame[]) => {
    const newGame: StoredGame[] = game;
    storedFavoriteGames.push(newGame);
    localStorage.setItem("favoriteGames", JSON.stringify(storedFavoriteGames));
  };

  const removeFavoriteGame = (gameId: number) => {
    const updateFavoriteGames = storedFavoriteGames.filter(
      (item: StoredGame) => item.id !== gameId
    );
    localStorage.setItem("favoriteGames", JSON.stringify(updateFavoriteGames));
  };
  return(
    <FavoriteContext.Provider value={{favoriteGames, addFavoriteGame, removeFavoriteGame}}>
        {children}
    </FavoriteContext.Provider>
  )
};
