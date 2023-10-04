import {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";
import { CardProps, FavoriteGame } from "./types";
interface FavoriteProviderProps {
  children: ReactNode;
}
const FavoriteContext = createContext<{ favoriteList: FavoriteGame[] }>({
  favoriteList: [],
});

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("Error ...");
  }
  return context;
};

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favoriteList, setFavoriteList] = useState<FavoriteGame[]>([]);
  console.log(favoriteList);

  useEffect(() => {
    const data = localStorage.getItem("favoriteGames");
    const favoriteGames = data ? JSON.parse(data) : [];
    setFavoriteList(favoriteGames);
  }, []);

  const addFavoriteGame = (game: FavoriteGame) => {
    const newGame: FavoriteGame = { ...game, favorite: true };
    setFavoriteList([...favoriteList, newGame]);
  };

  const removeFavoriteGame = (gameId: number) => {
    const updatedFavoriteGame = favoriteList.filter(
      (game) => game.id === gameId
    );
    setFavoriteList(updatedFavoriteGame);
  };

  //   useEffect(() => {
  //     localStorage.setItem("favoriteGames", JSON.stringify(favorileList));
  //   }, [favorileList]);

  return (
    <FavoriteContext.Provider value={{ favoriteList, addFavoriteGame, removeFavoriteGame }}>
      {children}
    </FavoriteContext.Provider>
  );
};
