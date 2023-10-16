import { useState, useEffect, useRef, useCallback } from "react";
import Banner from "../banner/banner.component";
import "./carrousel.scss";

const Carrousel = () => {
  const banners = [
    {
      title: "Red Dead Redemption",
      description:
        "Play as Arthur Morgan, a member of the infamous Van der Linde gang, as you navigate through a vast and detailed open world",
      image:
        "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    },
    {
      title: "Red Dead Redemption",
      description:
        "Play as Arthur Morgan, a member of the infamous Van der Linde gang, as you navigate through a vast and detailed open world",
      image:
        "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    },
    {
      title: "Red Dead Redemption",
      description:
        "Play as Arthur Morgan, a member of the infamous Van der Linde gang, as you navigate through a vast and detailed open world",
      image:
        "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    },
    {
      title: "Red Dead Redemption",
      description:
        "Play as Arthur Morgan, a member of the infamous Van der Linde gang, as you navigate through a vast and detailed open world",
      image:
        "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    },
  ];

  const [nextSlider, setNextSlider] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | 0>(0);

  const handleNextSlider = useCallback(() => {
    const changeSlider = nextSlider + 1;
    if (changeSlider < banners.length) {
      setNextSlider(changeSlider);
    } else {
      setNextSlider(0);
    }
  }, [nextSlider, banners.length]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNextSlider();
    }, 2000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [handleNextSlider]);

  const slide = () => {
    return {
      title: banners[nextSlider].title,
      description: banners[nextSlider].description,
      image: banners[nextSlider].image,
    };
  };

  const activeSlide = slide();

  const handleChangeDot = (indexDot: number) => {
    setNextSlider(indexDot);
  };
  return (
    <>
      <div className="banner-buttons">
      </div>
      <Banner banner={activeSlide} />
      <div className="dots-container">
        {banners.map((_banner, index) => (
          <span
            key={index}
            className={`dot ${index === nextSlider ? "active" : ""}`}
            onClick={() => handleChangeDot(index)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Carrousel;
