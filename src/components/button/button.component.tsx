import "../../index.scss";
import { ButtonProps } from "../../types";

const Button = ({ children, onClick }: ButtonProps) => {
  const buttonText = children;
  let cardButton;

  switch (children) {
    case "BUY NOW":
      cardButton = "blue-button";
      break;
    case "INSTALL GAME":
      cardButton = "blue-button";
      break;
    case "VER DETAILS":
      cardButton = "yellow-button";
      break;
    default:
      break;
  }

//   interface CardButton{
//     "BUY NOW": string,
//     "INSTALL GAME": string,
//     "VER DETAILS": string
//   }
// const CARD_BUTTON_COLOR: CardButton = {
//   "BUY NOW": "blue-button",
//   "INSTALL GAME": "blue-button",
//   "VER DETAILS": "yellow-button"
// }

// cardButton = CARD_BUTTON_COLOR[children]

  return (
    <button onClick={onClick} className={cardButton}>
      {buttonText}
    </button>
  );
};

export default Button;
