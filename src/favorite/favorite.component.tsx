import { useFavorite } from "../games-context";
import Card from "../components/card/card.component";

const Favorite = () => {
  const { favorileList } = useFavorite();

  return (
    <>
      {favorileList.map(((favoriteItem, id)) => (
        <Card key={id} game={favoriteItem}  />
      ))}
    </>
  );
};

export default Favorite;
