import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'eco-bottle-2024' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
  })
  @IsString()
  image: string;

  @ApiProperty({
    example:
      'A high-quality, durable water bottle made from recycled materials.',
  })
  @IsString()
  description: string;

  @ApiProperty({ example: 29.99 })
  @IsNumber()
  price: number;
}
