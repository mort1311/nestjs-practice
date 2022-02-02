import { Product } from "src/products/product.model";

export class Category {
    constructor(
      public id: string,
      public title: string,
      public products: Product[],
    ) {}
  }
  