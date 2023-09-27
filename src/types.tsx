export interface CardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}
export interface GamesProps {
  game: CardProps;
}

export type ButtonProps = {
  onClick: () => void;
  children: string;
};
