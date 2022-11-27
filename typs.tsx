export interface dummyProps {
  category: string;
  categoryDescription: string;
  items: itemsProps[];
}

export interface itemsProps {
 
  title: string;
  image: Image[];
  price: number;
}
export interface Image {
  url: string;
}


export type InferGetStaticPaths<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? { params?: R }
  : never;