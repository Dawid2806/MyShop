export interface dummyProps {
  category: string;
  categoryDescription: string;
  items: itemsProps[];
}

export interface itemsProps {
  map(
    arg0: (item: any, index: any) => JSX.Element | undefined
  ): import("react").ReactNode;
  title: string;
  image: Image[];
  price: number;
}
export interface Image {
  url: string;
}
