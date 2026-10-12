var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let BillsService = class BillsService {
    splitBill(peopleCount, body) {
        const subtotal = body.items.reduce((sum, item) => sum + item.price * item.qty, 0);
        const tipPercent = body.tipPercent ?? 0;
        const tip = subtotal * (tipPercent / 100);
        const total = subtotal + tip;
        const perPerson = Math.round(total / peopleCount);
        return {
            peopleCount,
            subtotal,
            tipPercent,
            tip,
            total,
            perPerson,
        };
    }
};
BillsService = __decorate([
    Injectable()
], BillsService);
export { BillsService };
//# sourceMappingURL=bills.service.js.map