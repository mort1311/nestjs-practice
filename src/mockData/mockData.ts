import { Category } from "src/categories/category.model"
import { Product } from "src/products/product.model"

export const products: Product[] = [
    {id:'1', title:'iphone 12', description: 'noviqt iphone', price:40},
    {id:'2', title:'iphone 10', description: 'stariqt iphone', price:5.99},
    {id:'3', title:'iphone 13', description: 'MEGA HIPER noviqt iphone', price:4000},
    {id:'4', title:'samsung telefon', description: 'telefon na samsung', price:50},
    {id:'5', title:'lenovo vibe 5', description: 'nai qkiq telefon', price:0.99},
    {id:'6', title:'acer', description: 'mega pc', price:2000},
    {id:'7', title:'dell', description: 'vurvqt proekti za nintendo', price:0.99},
    {id:'8', title:'lenovo LEGION', description: 'NAI QKIQQQ', price:0.99},
]

export const categories: Category[] = [
    {id: '1', title: 'apple', products:[products[0],products[1],products[2]]},
    {id: '2', title: 'android', products: [products[3],products[4]]},
    {id: '3', title: 'windows', products: [products[5],products[6],products[7]]}
]