import { useState, useEffect } from "react";


const GamesTable = () => {
  const [games, setGames] = useState([]);
  console.log(games);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/averoli/video-games/games"
        );
        const json = await response.json();
        const data = json.games;
        setGames(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return <div>GamesTable</div>;
};

export default GamesTable;
