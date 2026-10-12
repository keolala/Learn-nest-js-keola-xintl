var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BadRequestException, Injectable, } from '@nestjs/common';
let ElectricityService = class ElectricityService {
    calculateElectricityBill(dto) {
        const customerName = dto.customerName.trim();
        const { previousKwh, currentKwh } = dto.meter;
        const { baseFee, perKwh, taxRate = 11 } = dto.rates;
        if (currentKwh <= previousKwh) {
            throw new BadRequestException('currentKwh must be greater than previousKwh');
        }
        const usageKwh = currentKwh - previousKwh;
        const usageFee = usageKwh * perKwh;
        const subtotal = baseFee + usageFee;
        const tax = subtotal * taxRate / 100;
        const total = subtotal + tax;
        return {
            customerName,
            usageKwh,
            baseFee,
            usageFee,
            subtotal,
            taxRate,
            tax,
            total,
        };
    }
};
ElectricityService = __decorate([
    Injectable()
], ElectricityService);
export { ElectricityService };
//# sourceMappingURL=electricity.service.js.map