import { useFavorite } from "../games-context";
import Card from "../components/card/card.component";

const Favorite = () => {
  const { favoriteList } = useFavorite();

  return (
    <div className="games-container">
      {favoriteList.map((favoriteItem, id) => (
        <Card key={id} game={favoriteItem} />
      ))}
    </div>
  );
};

export default Favorite;
