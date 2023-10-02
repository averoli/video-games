import React, { useState } from "react";
export const GamesFavoriteContext = React.createContext({});

const GamesContex = () => {
  const [favorite, setFavorite] = useState(0);
  return (
    <div>
      <GamesFavoriteContext.Provider value={{ favorite, setFavorite }}>
        {children}
      </GamesFavoriteContext.Provider>
    </div>
  );
};

export default GamesContex;
