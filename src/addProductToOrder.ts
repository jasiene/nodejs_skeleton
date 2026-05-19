import type { Product } from "./types.js";

export const addProductToOrder = (product: Product, saleQuantity: number) => {
  product.hold += saleQuantity;
};
