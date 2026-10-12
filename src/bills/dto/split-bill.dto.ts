import { Type } from 'class-transformer';
import {
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  IsOptional,
  IsNumber,
  Min,
  Max,
} from 'class-validator';

import { SplitBillItemDto } from './split-bill-item.dto.js';

export class SplitBillDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(30)
  @ValidateNested({ each: true })
  @Type(() => SplitBillItemDto)
  items: SplitBillItemDto[];

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(30)
  tipPercent: number = 0;
}