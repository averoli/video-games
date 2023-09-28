import Header from "../components/banner/banner.component";
import GamesTable from "../components/games-table/games-table.component";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <GamesTable />
    </div>
  );
};

export default Home;
