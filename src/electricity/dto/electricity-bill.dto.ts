import { Transform, Type } from 'class-transformer';
import {
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';

import { MeterDto } from './meter.dto.js';
import { ElectricityRatesDto } from './electricity-rates.dto.js';

export class ElectricityBillDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @IsString()
  @Length(3, 80)
  customerName: string;

  @ValidateNested()
  @Type(() => MeterDto)
  meter: MeterDto;

  @ValidateNested()
  @Type(() => ElectricityRatesDto)
  rates: ElectricityRatesDto;
}