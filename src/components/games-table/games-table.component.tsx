import {useState, useEffect} from "react";
import {CardProps} from "../../types";
import Card from "../card/card.component";
import Pagination from "../pagination/pagination.component";

import "./games-table.scss";

const GamesTable = () => {
  const [games, setGames] = useState<CardProps[]>([]);
  const [filteredGames, setFilteredGames] = useState<CardProps[]>([]);
  const [currentPage, setCurrentePage] = useState(1);
  const itemsPerPage = 6;

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
        setFilteredGames(data);
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
    setFilteredGames(
      games.filter((game) => {
        return game.title
          .toLocaleLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
    setCurrentePage(1);
  };

  const paginate = (pageNumber: number) => setCurrentePage(pageNumber);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredGames.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="games-container">
      <input
        type="search"
        placeholder="Search"
        className="games-container__search"
        onChange={handleSearchChange}
      />
      <div className="games-wrapper" data-testid="games-list">
        {currentItems.map((game, id) => (
          <Card key={id} game={game}/>
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredGames.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default GamesTable;
