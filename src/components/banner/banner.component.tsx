import Button from "../button/button.component";
import "./banner.scss";

const Bunner = () => {
  const handleInstallGame = () => {
    alert("Install Game");
  };
  const handleAddToFavorites = () => {
    alert("ADD TO FAVORITES");
  };

  return (
    <div className="bunner-container">
      
      <div className="bunner-content">
        <h2>Title</h2>
        <p>Description</p>
        <div>
          <Button onClick={handleInstallGame}>INSTALL GAME</Button>
          <Button onClick={handleAddToFavorites}>ADD TO FAVORITES</Button>
        </div>
      </div>
      <img
        src="https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
        alt="title"
      />
    </div>
  );
};

export default Bunner;
