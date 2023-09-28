import Button from "../button/button.component";

const Bunner = () => {
  const handleInstallGame = () => {
    alert("Install Game");
  };
  const handleAddToFavorites = () => {
    alert("ADD TO FAVORITES");
  };

  return (
    <div>
      <img />
      <h4>Title</h4>
      <p>Description</p>
      <div>
        <Button onClick={handleInstallGame}>INSTALL GAME</Button>
        <Button onClick={handleAddToFavorites}>ADD TO FAVORITES</Button>
      </div>
    </div>
  );
};

export default Bunner;
