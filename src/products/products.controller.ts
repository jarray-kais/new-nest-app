import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';

type ProducType = { id: number; title: string; price: number };

@Controller('/api/products')
export class ProductsController {
  private products: ProducType[] = [
    { id: 1, title: 'book', price: 10 },
    { id: 2, title: 'pen', price: 5 },
    { id: 3, title: 'laptop', price: 400 },
  ];

  @Post()
  public createNewProduct(@Body() body: CreateProductDto) {
    const newProduct: ProducType = {
      id: this.products.length + 1,
      title: body.title,
      price: body.price,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  @Get()
  public getAllProducts() {
    return this.products;
  }
}
