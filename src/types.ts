export type ProductId = string;

export type Product = {
  id: ProductId;
  name: string;
  hold: number;
  orderQuantity: number;
};

export type Order = {
  items: Array<Product>;
};
