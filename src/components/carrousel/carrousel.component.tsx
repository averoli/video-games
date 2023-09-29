import Banner from "../banner/banner.component";

const Carrousel = () => {
  const banner = {
    title: "Red Dead Redemption",
    description:
      "Play as Arthur Morgan, a member of the infamous Van der Linde gang, as you navigate through a vast and detailed open world",
    image:
      "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
  };
  return <>{banner ? <Banner banner={banner} /> : null}</>;
};

export default Carrousel;
