import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    private products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct);

        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(productId: string) {
        const {product} = this.findProduct(productId);
        return {...product};
    }

    updateProduct(productId: string, title: string, description: string, price: number){
        const {product, productIndex} = this.findProduct(productId); 
        const updatedProduct = product;
        if(title) {
            updatedProduct.title=title;
        }
        if(description) {
            updatedProduct.description=description;
        }
        if(price) {
            updatedProduct.price=price;
        }
        this.products[productIndex] = updatedProduct;

    }

    removeProduct(productId: string){
        const newProducts = this.products.filter(prod => prod.id!==productId);
        this.products=newProducts
        return this.products.length;
    }

    private findProduct(id: string) : {product: Product, productIndex: number} {
        const productIndex = this.products.findIndex(prod => prod.id == id)
        const product = this.products[productIndex];
        if(!product){
            throw new NotFoundException('Could not find product');
        }
        return {product: product, productIndex: productIndex};
    }
}