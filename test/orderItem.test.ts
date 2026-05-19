import { describe, test, expect } from "vitest";
import type { Product } from "../src/types.js";
import { addProductToOrder } from "../src/addProductToOrder.js";

describe("Adding items", () => {
  test("Add a temporary hold of 1 to product customer adds to order", () => {
    const product: Product = {
      id: "327",
      name: "Ibanez Tube Screamer",
      hold: 0,
    };

    addProductToOrder(product, 1);

    expect(product.hold).toEqual(1);
  });
});
