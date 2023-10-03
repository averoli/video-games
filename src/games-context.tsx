import { createContext, useEffect } from "react";

export const FavoriteContext = createContext({});

export const FavoriteProvider = ({ children }) => {
  const getLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    const storedGames = data ? JSON.parse(data) : [];
    return storedGames;
  };
  const initData = getLocalStorage("favoriteGames");
  useEffect(() => {
    localStorage.setItem("favoriteGames", JSON.stringify(initData));
  }, [initData]);

  return (
    <FavoriteContext.Provider value={{ initData }}>
      {children}
    </FavoriteContext.Provider>
  );
};
