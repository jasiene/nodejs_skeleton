export type ProductId = string;

export type Product = {
  id: ProductId;
  name: string;
  hold: number;
};

export type Order = {
  items: Record<ProductId, Product>;
};
