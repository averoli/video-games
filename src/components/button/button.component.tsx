import "../../index.scss";
import { ButtonProps } from "../../types";
import { CARD_BUTTON_COLOR } from "../../globals";

const Button = ({ children, onClick }: ButtonProps) => {
  // switch (children) {
  //   case "BUY NOW":
  //     cardButton = "blue-button";
  //     break;
  //   case "INSTALL GAME":
  //     cardButton = "blue-button";
  //     break;
  //   case "VER DETAILS":
  //     cardButton = "yellow-button";
  //     break;
  //   default:
  //     break;
  // }

  const CARD_BUTTON_DEFAULT = "blue-button";
  
  const cardButton = CARD_BUTTON_COLOR[children] || CARD_BUTTON_DEFAULT;

  return (
    <button onClick={onClick} className={cardButton}>
      {children}
    </button>
  );
};

export default Button;
