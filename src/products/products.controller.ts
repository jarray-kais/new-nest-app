import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.tdo';
import { ProductsService } from './products.service';
import { ConfigService } from '@nestjs/config';

@Controller('/api/products')
export class ProductsController {
  constructor(
    private readonly productService: ProductsService,
    private readonly config: ConfigService,
  ) {}
  @Post()
  public createNewProduct(
    @Body()
    createProductDto: CreateProductDto,
  ) {
    return this.productService.createProduct(createProductDto);
  }

  @Get()
  public getAllProducts() {
    const example = this.config.get<string>('EXAMPLE');
    const example1 = process.env.EXAMPLE;
    console.log({ example, example1 });
    return this.productService.getAll();
  }

  //Get : /api/products/:id
  @Get('/:id')
  public getSingleProducts(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getOneBy(id);
  }

  //PUT : /api/products/:id
  @Put('/:id')
  public updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(id, updateProductDto);
  }

  //delete : /api/products/:id
  @Delete('/:id')
  public deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
//express-way
/*   @Post('express-way')
  public createNewProductExpressWay(@Req() req: Request, @Res({passthrough : true}) res: Response , @Headers headers : any) {
    const newProduct: ProducType = {
      id: this.products.length + 1,
      title: req.body.title,
      price: req.body.price,
    };
    this.products.push(newProduct);
    console.log(headers)
    res.status(201).json(newProduct);

    res.cookie('authCookie', 'this is a cookie', {
    httpOnly: true
    maxAge : 120
    });
  } */
