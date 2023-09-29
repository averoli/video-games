import GamesTable from "../components/games-table/games-table.component";
import "./bestsellers.scss";
import Carrousel from "../components/carrousel/carrousel.component";
import Slider from "../slider/Slider";

const Bestsellers = () => {
  return (
    <div className="bestsellers">
      <Carrousel />
      <GamesTable />
      <Slider />
    </div>
  );
};

export default Bestsellers;
