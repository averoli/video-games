export interface Feature {
  content: string;
}

export interface CardProps {
  id: number;
  newRelease: boolean;
  title: string;
  description: string;
  price: string;
  image: string;
  features?: Feature;
}
export interface GamesProps {
  game: CardProps;
}

export type ButtonProps = {
  onClick: () => void;
  children: string;
};

export interface CardButton {
  [key: string]: string;
}

export interface BannerProps {
  banner: { title: string; description: string; image: string };
}

export interface FavoriteGame {
  id: number;
  newRelease: boolean;
  title: string;
  description: string;
  price: string;
  image: string;
  features?: Feature;
  favorite?: boolean;
}

export interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNUmber:number) => void;
}
