import { CardProps } from "../../../types";

const CardImage = ({ image }: CardProps) => {
  return (
    <div>
      <img src={image} />
    </div>
  );
};

export default CardImage;
