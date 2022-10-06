export interface dummyProps {
  key?: string;
  category?: string;
  categoryDescription?: string;
  items?: itemsProps[];
}

export interface itemsProps {
  key?: string;
  id?: string;
  title?: string;
  description?: string;
  price?: string;
  photo?: string;
}
