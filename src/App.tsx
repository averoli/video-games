import "./App.scss";
import Header from "./components/header/header.component";
import GamesTable from "./components/games-table/games-table.component";

function App() {
  return (
    <div className="app">
      <Header />
      <GamesTable />
    </div>
  );
}

export default App;
