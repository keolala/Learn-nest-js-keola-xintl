var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException } from '@nestjs/common';
let ShippingService = class ShippingService {
    calculateCost(city, express, insurance, body) {
        const baseFares = {
            jakarta: 9000,
            bandung: 12000,
            surabaya: 15000,
            medan: 18000,
            denpasar: 20000,
        };
        const baseFare = baseFares[city.toLowerCase()];
        if (baseFare === undefined) {
            throw new NotFoundException('Unsupported destination city');
        }
        const { weightKg, dimension } = body;
        const volumetricKg = (dimension.lengthCm *
            dimension.widthCm *
            dimension.heightCm) /
            5000;
        const chargeableKg = Math.max(weightKg, volumetricKg);
        const extraKg = Math.max(0, Math.ceil(chargeableKg) - 1);
        const weightExtra = extraKg * 2000;
        const subtotal = baseFare + weightExtra;
        const expressFee = express ? subtotal * 0.5 : 0;
        const insuranceFee = insurance ? Math.ceil(chargeableKg) * 1000 : 0;
        const total = subtotal + expressFee + insuranceFee;
        return {
            city,
            express,
            insurance,
            weightKg,
            volumetricKg: Math.round(volumetricKg * 10) / 10,
            chargeableKg,
            baseFare,
            expressFee,
            insuranceFee,
            total,
        };
    }
};
ShippingService = __decorate([
    Injectable()
], ShippingService);
export { ShippingService };
//# sourceMappingURL=shipping.service.js.map