var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let TaxService = class TaxService {
    calculateTax(amount, rate, inclusive) {
        let tax;
        let net;
        let gross;
        if (inclusive) {
            gross = amount;
            tax = amount * rate / (100 + rate);
            net = amount - tax;
        }
        else {
            tax = amount * rate / 100;
            net = amount;
            gross = amount + tax;
        }
        return {
            amount,
            rate,
            inclusive,
            tax,
            net,
            gross,
        };
    }
};
TaxService = __decorate([
    Injectable()
], TaxService);
export { TaxService };
//# sourceMappingURL=tax.service.js.map