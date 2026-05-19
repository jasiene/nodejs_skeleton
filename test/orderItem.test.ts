import { describe, test, expect } from "vitest";
import type { Order, Product } from "../src/types.js";
import { addProductToOrder } from "../src/addProductToOrder.js";

describe("Adding items", () => {
  test("Add a temporary hold of 1 to product customer adds to order", () => {
    const order: Order = { items: [] };
    const product: Product = {
      id: "327",
      name: "Ibanez Tube Screamer",
      hold: 0,
      orderQuantity: 0,
    };

    addProductToOrder(order, product, 1);

    expect(product.hold).toEqual(1);
  });

  test("Order contains the added item with quantity 1", () => {
    const order: Order = { items: [] };
    const product: Product = {
      id: "327",
      name: "Ibanez Tube Screamer",
      hold: 0,
      orderQuantity: 0,
    };

    addProductToOrder(order, product, 1);

    expect(
      order.items.find((item) => item.id === "327")?.orderQuantity,
    ).toEqual(1);
  });
});
