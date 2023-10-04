import {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";
import { FavoriteGame } from "./types";
interface FavoriteProviderProps {
  children: ReactNode;
}
const FavoriteContext = createContext<{
  favoriteList: FavoriteGame[];
  addFavoriteGame: (game: FavoriteGame) => void;
  removeFavoriteGame: (gameId: number) => void;
}>({
  favoriteList: [],
  addFavoriteGame: () => {},
  removeFavoriteGame: () => {},
});

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("Error ...");
  }
  return context;
};

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {

  const data = localStorage.getItem("favoriteGames");
  const initFavoriteList = data ? JSON.parse(data) : [];

  const [favoriteList, setFavoriteList] = useState<FavoriteGame[]>(initFavoriteList);

  useEffect(() => {
    localStorage.setItem("favoriteGames", JSON.stringify(favoriteList));
  }, [favoriteList]);

  const addFavoriteGame = (game: FavoriteGame) => {
    const newGame: FavoriteGame = { ...game, favorite: true };
    setFavoriteList([...favoriteList, newGame]);
  };

  const removeFavoriteGame = (gameId: number) => {
    const updatedFavoriteGame = favoriteList.filter(
      (game) => game.id !== gameId
    );
    setFavoriteList(updatedFavoriteGame);
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteList, addFavoriteGame, removeFavoriteGame }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
