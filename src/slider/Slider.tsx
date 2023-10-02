import { useState } from "react";
import "./slider.scss";

const Slider = () => {
  const [nextSlider, setNextSlider] = useState(0);
  console.log(nextSlider);

  // setInterval(() => {
  //   autoChange();
  // }, 2000);

  const arr = ["a", "b", "c"];

  const slide = () => {
    return <p>{arr[nextSlider]}</p>;
  };

  const activeSlide = slide();

  // const autoChange = () => {
  //   const changeSlider = nextSlider + 1;
  //   if (changeSlider < arr.length) {
  //     setNextSlider(changeSlider);
  //   } else {
  //     setNextSlider(0);
  //   }
  // };

  const handleNextSlider = () => {
    const changeSlider = nextSlider + 1;
    if (changeSlider < arr.length) {
      setNextSlider(changeSlider);
    } else return;
  };

  const handlePrevSlider = () => {
    if (nextSlider > 0) {
      for (let i = nextSlider; i > 0; i--) {
        setNextSlider(nextSlider - 1);
      }
    }
  };
  return (
    <div className="slider-container">
      <div className="active bg-pink">{activeSlide}</div>
      <button onClick={handleNextSlider}>Next</button>
      <button onClick={handlePrevSlider}>Prev</button>
    </div>
  );
};

export default Slider;
