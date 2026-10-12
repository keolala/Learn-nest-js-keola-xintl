import { MeterDto } from './meter.dto.js';
import { ElectricityRatesDto } from './electricity-rates.dto.js';
export declare class ElectricityBillDto {
    customerName: string;
    meter: MeterDto;
    rates: ElectricityRatesDto;
}
