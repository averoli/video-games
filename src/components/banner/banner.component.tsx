import Button from "../button/button.component";
import "./banner.scss";
import { BannerProps } from "../../types";

const Bunner = ({ banner }: BannerProps) => {
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
        <div className="bunner-buttons">
          <Button onClick={handleInstallGame}>INSTALL GAME</Button>{" "}
          <Button onClick={handleAddToFavorites}>ADD TO FAVORITES</Button>
        </div>
      </div>
    </div>
  );
};

export default Bunner;
