import { FavoriteProvider } from "./games-context";
import Routers from "./routes";

function App() {
  return (
    <FavoriteProvider>
      <Routers />
    </FavoriteProvider>
  );
}

export default App;
