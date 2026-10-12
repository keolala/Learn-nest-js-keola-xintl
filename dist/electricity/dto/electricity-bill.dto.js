var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Type } from 'class-transformer';
import { IsString, Length, ValidateNested, } from 'class-validator';
import { MeterDto } from './meter.dto.js';
import { ElectricityRatesDto } from './electricity-rates.dto.js';
export class ElectricityBillDto {
    customerName;
    meter;
    rates;
}
__decorate([
    Transform(({ value }) => typeof value === 'string' ? value.trim() : value),
    IsString(),
    Length(3, 80),
    __metadata("design:type", String)
], ElectricityBillDto.prototype, "customerName", void 0);
__decorate([
    ValidateNested(),
    Type(() => MeterDto),
    __metadata("design:type", MeterDto)
], ElectricityBillDto.prototype, "meter", void 0);
__decorate([
    ValidateNested(),
    Type(() => ElectricityRatesDto),
    __metadata("design:type", ElectricityRatesDto)
], ElectricityBillDto.prototype, "rates", void 0);
//# sourceMappingURL=electricity-bill.dto.js.map