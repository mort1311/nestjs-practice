import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "src/products/product.model";
import { Category } from "./category.model";

@Injectable()
export class CategoryService {
    private categories: Category[] = [];

    insertCategory(title: string, products: Product[]) {
        const catId = Math.random().toString();
        const newCategory = new Category(catId, title, products);
        this.categories.push(newCategory);

        return catId;
    }

    getCategories() {
        return [...this.categories];
    }

    getSingleCategory(catId: string) {
        const {category} = this.findCategory(catId);
        return {...category};
    }

    updateCategory(catId: string, title: string, products: Product[]){
        const {category, categoryIndex} = this.findCategory(catId); 
        const updatedCategory = category;
        if(title) {
            updatedCategory.title=title;
        }
        if(products){
            updatedCategory.products=products;
        }
        this.categories[categoryIndex] = updatedCategory;

    }

    removeCategory(catId: string){
        const newCategorys = this.categories.filter(cat => cat.id!==catId);
        this.categories=newCategorys
        return this.categories.length;
    }

    private findCategory(id: string) : {category: Category, categoryIndex: number} {
        const categoryIndex = this.categories.findIndex(cat => cat.id == id)
        const category = this.categories[categoryIndex];
        if(!category){
            throw new NotFoundException('Could not find catuct');
        }
        return {category: category, categoryIndex: categoryIndex};
    }
}