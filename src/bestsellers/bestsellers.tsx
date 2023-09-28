
import GamesTable from "../components/games-table/games-table.component";
import "./bestsellers.scss";
import Bunner from "../components/banner/banner.component";

const Bestsellers = () => {
  return (
    <div className="bestsellers">
      <Bunner />
      <GamesTable />
    </div>
  );
};

export default Bestsellers;
