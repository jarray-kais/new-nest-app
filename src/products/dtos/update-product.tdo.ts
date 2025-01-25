import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateProductDto {
  @IsString({ message: 'title should be a string' })
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(150)
  @IsOptional()
  title: string;
  @IsNumber()
  @IsNotEmpty()
  @Min(0, { message: 'price should be not less than zero' })
  @IsOptional()
  price: number;
}
