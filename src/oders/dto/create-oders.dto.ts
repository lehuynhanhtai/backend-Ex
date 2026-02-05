import { IsString, IsInt, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateOderDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  payment_method: string;

  @IsInt()
  @IsNotEmpty()
  total_price: number;

  @IsString()
  @IsNotEmpty()
  notes: string;
}
