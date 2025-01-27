import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from './dtos/update-product.tdo';
import { CreateProductDto } from './dtos/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  /**
   *create a new product
   */
  public async createProduct(dto: CreateProductDto) {
    const newProduct = this.productRepository.create(dto);
    return this.productRepository.save(newProduct);
  }

  /**
   *get all product
   */
  public async getAll() {
    return await this.productRepository.find();
  }
  /**
   *Get one product by id
   */
  public async getOneBy(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) throw new NotFoundException('product not found');
    return product;
  }
  /**
   *update product
   */
  public async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.getOneBy(id);
    product.title = updateProductDto.title ?? product.title;
    product.price = updateProductDto.price ?? product.price;
    product.description = updateProductDto.description ?? product.description;
    return this.productRepository.save(product);
  }
  /**
   *delete product
   */
  public async delete(id: number) {
    const product = await this.getOneBy(id);
    await this.productRepository.remove(product);
    return { message: 'Product deleted successfully' };
  }
}
