import Header from "../components/header/header.component";
import GamesTable from "../components/games-table/games-table.component";
import "./bestsellers.scss";

const Bestsellers = () => {
  return (
    <div className="bestsellers">
      <Header />
      <GamesTable />
    </div>
  );
};

export default Bestsellers;
