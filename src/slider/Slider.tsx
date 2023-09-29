import { useState } from "react";
import "./slider.scss";

const Slider = () => {
  const [sliderDisplay, setSliderDisplay] = useState(true);
  console.log(sliderDisplay);
  console.log(setSliderDisplay);

  const handleClick = () => {};
  return (
    <div className="slider-container">
      <div className="slider active bg-pink">Slider 1</div>
      <div className="bg-orange">Slider 2</div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

export default Slider;
