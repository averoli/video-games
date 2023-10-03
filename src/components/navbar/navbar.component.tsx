import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
const NavBar = () => {
  const [favoriteIcon, setFavoriteIcon] = useState("");

  useEffect(() => {
    const favoriteGameKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("favorite_")
    );
    const favoriteGamesData = favoriteGameKeys.map((key) => {
      const gameId = parseInt(key.replace("favorite_", ""));
      const gameData = JSON.parse(localStorage.getItem(key) || "{}");
      return { id: gameId, ...gameData };
    });
    setFavoriteIcon(favoriteGameKeys)
    // setFavoriteGames(favoriteGamesData);
    console.log("hjkl", favoriteGameKeys);
  }, []);
  return (
    <>
      <div>2</div>
      <Outlet />
    </>
  );
};

export default NavBar;
