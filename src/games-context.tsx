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
const FavoriteContext = createContext({});

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("Error ...");
  }
  return context;
};

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favorileList, setFavoriteList] = useState<FavoriteGame[]>([]);
  console.log(favorileList);

  useEffect(() => {
    const data = localStorage.getItem("favoriteGames");
    const favoriteGames = data ? JSON.parse(data) : [];
    setFavoriteList(favoriteGames);
  }, []);

  //   useEffect(() => {
  //     localStorage.setItem("favoriteGames", JSON.stringify(favorileList));
  //   }, [favorileList]);

  return (
    <FavoriteContext.Provider value={{ favorileList }}>
      {children}
    </FavoriteContext.Provider>
  );
};
