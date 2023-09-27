import "../../index.scss";
import { ButtonProps } from "../../types";

const Button = ({ children, onClick }: ButtonProps) => {
  const buttonText = children;
  let cardButton = "button";

  switch (children) {
    case "BUY NOW":
      cardButton = "blue-button";
      break;
    case "VER DETAILS":
      cardButton = "yellow-button";
      break;
    default:
      break;
  }

  return (
    <button onClick={onClick} className={cardButton}>
      {buttonText}
    </button>
  );
};

export default Button;
