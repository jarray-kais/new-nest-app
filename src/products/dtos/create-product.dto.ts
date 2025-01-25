import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'title should be a string' })
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(150)
  title: string;
  @IsNumber()
  @IsNotEmpty()
  @Min(0, { message: 'price should be not less than zero' })
  price: number;
}
