import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { faker } from '@faker-js/faker';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @ApiProperty({ example: faker.internet.username() })
  @IsString()
  name: string;

  @ApiProperty({ example: faker.image.url() })
  @IsString()
  image: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  price: number;
}
