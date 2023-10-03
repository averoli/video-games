import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
const NavBar = () => {
  const [favoriteNumber, setFavoriteNumber] = useState(0);

  const getFavoriteNumber = () => {
    let number;
    const favoriteNumber = localStorage.getItem("favoriteGames");
    favoriteNumber ? (number = favoriteNumber.length) : (number = 0);
    setFavoriteNumber(number);
  };
  useEffect(() => {
    getFavoriteNumber();
  }, []);
  return (
    <>
      <div>{favoriteNumber}</div>
      <Outlet />
    </>
  );
};

export default NavBar;
