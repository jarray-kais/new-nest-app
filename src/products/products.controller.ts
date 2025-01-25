import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.tdo';
import { Request, Response } from 'express';

type ProducType = { id: number; title: string; price: number };

@Controller('/api/products')
export class ProductsController {
  private products: ProducType[] = [
    { id: 1, title: 'book', price: 10 },
    { id: 2, title: 'pen', price: 5 },
    { id: 3, title: 'laptop', price: 400 },
  ];

  //express-way
  @Post('express-way')
  public createNewProductExpressWay(@Req() req: Request, @Res() res: Response) {
    const newProduct: ProducType = {
      id: this.products.length + 1,
      title: req.body.title,
      price: req.body.price,
    };
    this.products.push(newProduct);
    res.status(201).json(newProduct);
  }

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

  //Get : /api/products/:id
  @Get('/:id')
  public getSingleProducts(@Param('id') id: string) {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product) throw new NotFoundException('product not found');
    return product;
  }

  //PUT : /api/products/:id
  @Put('/:id')
  public updateProduct(
    @Param('id') id: string,
    @Body() body: UpdateProductDto,
  ) {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product) throw new NotFoundException('product not found');
    console.log(body);
    return { message: 'Product updated successfully' };
  }

  //delete : /api/products/:id
  @Delete('/:id')
  public deleteProduct(@Param('id') id: string) {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product) throw new NotFoundException('product not found');
    return { message: 'Product deleted successfully' };
  }
}
