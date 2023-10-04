import { useState, useEffect } from "react";
import Card from "../card/card.component";
import { CardProps } from "../../types";
import "./games-table.scss";
import Pagination from "../pagination/pagination.component";

const GamesTable = () => {
  const [games, setGames] = useState<CardProps[]>([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentePage] = useState(1);
  const itemsPerPage = 6;
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setSearch(searchQuery);
  };

  const filteredGames = games.filter((game) => {
    return game.title.toLocaleLowerCase().includes(search.toLowerCase());
  });

  const paginate = (pageNumber: number) => setCurrentePage(pageNumber);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = games.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="games-container">
      <input
        type="search"
        placeholder="Search"
        className="games-container__search"
        onChange={handleSearchChange}
      />
      <div className="games-wrapper">
        {filteredGames.map((game, id) => (
          <Card key={id} game={currentItems} />
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={games.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default GamesTable;
