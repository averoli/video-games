import { CardProps } from "../../../types";
import "./card-image.scss";

const CardImage = ({ image, title }: CardProps) => {
  return (
    <div className="card-image">
      <img src={image} alt={title} />
    </div>
  );
};

export default CardImage;
