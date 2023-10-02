import GamesTable from "../components/games-table/games-table.component";
import "./bestsellers.scss";
import Carrousel from "../components/carrousel/carrousel.component";

const Bestsellers = () => {
  return (
    <div className="bestsellers">
      <Carrousel />
      <GamesTable />
    </div>
  );
};

export default Bestsellers;
