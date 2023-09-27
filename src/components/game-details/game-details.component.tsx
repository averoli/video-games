import { useLocation } from "react-router-dom";
import "./game-details.scss";
import Button from "../button/button.component";
import { SiSemanticrelease } from "react-icons/si";
import { currency } from "../../globals";

const GameDetails = () => {
  const location = useLocation();
  const game = location.state && location.state.game;

  if (!game) {
    return <div>Game not found</div>;
  }

  const { title, price, description, image } = game;

  const handleInstallGame = () => {
    alert("Install game");
  };

  return (
    <div className="game-details-container">
      <div className="game-details-wrapper">
        <div className="game-details__new-release">
          <SiSemanticrelease style={{ color: "red" }} />
          <p>NEW RELEASE</p>
        </div>
        <h2>{title}</h2>
        <div className="game-details__block-price">
          <h3>{price} {currency}</h3>
          <Button onClick={handleInstallGame}>INSTALL GAME</Button>
        </div>
        <div className="game-details__block-description">
          <img src={image} alt={title} />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
