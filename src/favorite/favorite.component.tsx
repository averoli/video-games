import { useFavorite } from "../games-context";
import Card from "../components/card/card.component";

const Favorite = () => {
  const { favoriteList } = useFavorite();

  return (
    <div className="games-container">
      {favoriteList.length === 0 ? (
        <h4>No favorite game.</h4>
      ) : (
        favoriteList.map((favoriteItem, id) => (
          <Card key={id} game={favoriteItem} />
        ))
      )}
    </div>
  );
};

export default Favorite;
