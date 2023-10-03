import { Routes, Route } from "react-router-dom";
import Bestsellers from "./bestsellers/bestsellers";
import GameDetails from "./components/game-details/game-details.component";

import Favorite from "./favorite/favorite.component";
import NavBar from "./components/navbar/navbar.component";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="*" element={<div>404 NOT FOUND</div>} />
        <Route path="video-games" element={<Bestsellers />} />
        <Route path="video-games/:id" element={<GameDetails />} />
        <Route path="favorite" element={<Favorite />} />
      </Route>
    </Routes>
  )
}

export default Routers