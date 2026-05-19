import type { Order, Product } from "./types.js";

export const addProductToOrder = (
  order: Order,
  product: Product,
  saleQuantity: number,
) => {
  order.items.push(product);
  product.orderQuantity = saleQuantity;
  product.hold += saleQuantity;
};
