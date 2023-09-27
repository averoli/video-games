import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import GameDetails from "./components/game-details/game-details.component";

export const currency = "USD";

function App() {
  return (
    <Routes>
      <Route path="*" element={<div>404 NOT FOUND</div>} />

      <Route path="video-games" element={<Home />} />
      <Route path="video-games/:id" element={<GameDetails />} />
    </Routes>
  );
}

export default App;
