import Button from "../button/button.component";
import "./banner.scss";
import { BannerProps } from "../../types";

const { banner }: BannerProps = {
  title: "Red Dead Redemption",
  description:
    "Play as Arthur Morgan, a member of the infamous Van der Linde gang, as you navigate through a vast and detailed open world",
  image:
    "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
};
const Bunner = ({banner}: BannerProps) => {
  const { title, description, image } = banner;

  const handleInstallGame = () => {
    alert("Install Game");
  };
  const handleAddToFavorites = () => {
    alert("ADD TO FAVORITES");
  };

  return (
    <div className="bunner-container">
      <img src={image} alt={title} />
      <div className="bunner-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <Button onClick={handleInstallGame}>INSTALL GAME</Button>{" "}
          <Button onClick={handleAddToFavorites}>ADD TO FAVORITES</Button>
        </div>
      </div>
    </div>
  );
};

export default Bunner;
