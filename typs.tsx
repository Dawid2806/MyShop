export interface dummyProps {
  category: string;
  categoryDescription: string;
  items: itemsProps[];
}

export interface itemsProps {
  key: string;
  id: string;
  title: string;
  description?: string;
  price?: string;
  image?: Image[] | string;
}
export interface Image {
  url: string;
}
