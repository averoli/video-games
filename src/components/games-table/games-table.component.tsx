import { useState, useEffect } from "react";
import Card from "../card/card.component";
import { CardProps } from "../../types";
import "./games-table.scss";

const GamesTable = () => {
  const [games, setGames] = useState<CardProps[]>([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/averoli/video-games/games"
  //     );
  //     const json = await response.json();
  //     if (!json || !Array.isArray(json)) {
  //       throw new Error("Invalid data structure");
  //     }
  //     const data = json;
  //     setGames(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const fetchDataPromise = () => {
    fetch("https://my-json-server.typicode.com/averoli/video-games/games")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error!");
        }
        return response.json();
      })
      .then((json) => {
        const data = json;
        setGames(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally();
  };

  useEffect(() => {
    fetchDataPromise();
  }, []);

  return (
    <div className="games-container">
      {games.map((game, id) => (
        <Card key={id} game={game} id={id} />
      ))}
    </div>
  );
};

export default GamesTable;
