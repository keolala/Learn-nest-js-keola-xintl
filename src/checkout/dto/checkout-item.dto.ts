import { Type, Transform } from 'class-transformer';
import {
  IsString,
  Length,
  IsNumber,
  Min,
  IsInt,
} from 'class-validator';

export class CheckoutItemDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @IsString()
  @Length(2, 50)
  name: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  qty: number;
}