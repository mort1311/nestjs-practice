import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { Product } from 'src/products/product.model';
import { CategoryService } from "./categories.service"

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  addCategory(
    @Body('title') catTitle: string,
    @Body('products') catProducts: Product[],
    
  ): any {
    const generatedId = this.categoryService.insertCategory(
      catTitle,
      catProducts
    );
    return { id: generatedId };
  }

  @Get()
  getAllCategories() {
    return this.categoryService.getCategories();
  }

  @Get(':id')
  getCategory(@Param('id') catId: string) {
    return this.categoryService.getSingleCategory(catId);
  }

  @Patch(':id')
  updateCategory(
    @Param('id') catId: string,
    @Body('title') catTitle: string,
    @Body('products') catProducts: Product[],
  ) {
    return this.categoryService.updateCategory(
      catId,
      catTitle,
      catProducts,
    );
  }

  @Delete(':id')
  removeCategory(@Param('id') catId: string){
    return this.categoryService.removeCategory(catId);
  }
}
