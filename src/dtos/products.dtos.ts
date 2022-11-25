import { IsString, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';
import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';


export class CreateProductDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty()
  @IsString()
  readonly image: string;

  
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;
}

export class UpdateProductDto extends PartialType(
  OmitType(CreateProductDto, ['name']),
) {}