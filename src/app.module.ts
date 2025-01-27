import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.test.local'],
      isGlobal: true,
    }),
    UsersModule,
    ProductsModule,
    ReviewsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'nestjs-app-db',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      entities: [Product],
      synchronize: true, //only in development
    }),
  ],
})
export class AppModule {}
