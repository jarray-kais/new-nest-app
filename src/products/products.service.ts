import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from './dtos/update-product.tdo';
import { CreateProductDto } from './dtos/create-product.dto';
import { UsersService } from 'src/users/users.service';

type ProducType = { id: number; title: string; price: number };
@Injectable()
export class ProductsService {
  constructor(private readonly userSerice: UsersService) {}
  private products: ProducType[] = [
    { id: 1, title: 'book', price: 10 },
    { id: 2, title: 'pen', price: 5 },
    { id: 3, title: 'laptop', price: 400 },
  ];

  /**
   *create a new product
   */
  public createProduct({ title, price }: CreateProductDto) {
    const newProduct: ProducType = {
      id: this.products.length + 1,
      title,
      price,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  /**
   *get all product
   */
  public getAll() {
    const products = this.products;
    const users = this.userSerice.getAll();
    return { products, users };
  }
  /**
   *Get one product by id
   */
  public getOneBy(id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new NotFoundException('product not found');
    return product;
  }
  /**
   *update product
   */
  public update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new NotFoundException('product not found');
    console.log(updateProductDto);
    return { message: 'Product updated successfully' };
  }
  /**
   *delete product
   */
  public delete(id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new NotFoundException('product not found');
    return { message: 'Product deleted successfully' };
  }
}
