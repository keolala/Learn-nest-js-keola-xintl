var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException, } from '@nestjs/common';
let CheckoutService = class CheckoutService {
    calculateDiscount(body, member, coupon) {
        const subtotal = body.items.reduce((sum, item) => sum + item.price * item.qty, 0);
        const memberDiscount = member ? subtotal * 0.05 : 0;
        let couponDiscount = 0;
        if (coupon === undefined) {
            couponDiscount = 0;
        }
        else if (coupon === 'HEMAT10') {
            couponDiscount = subtotal * 0.10;
        }
        else if (coupon === 'HEMAT20') {
            couponDiscount = subtotal * 0.20;
        }
        else if (coupon === 'FREESHIP') {
            couponDiscount = 0;
        }
        else {
            throw new NotFoundException('Coupon not found');
        }
        const totalDiscount = memberDiscount + couponDiscount;
        const grandTotal = subtotal - totalDiscount;
        return {
            subtotal,
            member,
            ...(coupon !== undefined ? { coupon } : {}),
            discounts: {
                member: memberDiscount,
                coupon: couponDiscount,
                total: totalDiscount,
            },
            grandTotal,
        };
    }
};
CheckoutService = __decorate([
    Injectable()
], CheckoutService);
export { CheckoutService };
//# sourceMappingURL=checkout.service.js.map