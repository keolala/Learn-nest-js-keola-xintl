var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, HttpCode, HttpStatus, Post, Query, } from '@nestjs/common';
import { CheckoutService } from './checkout.service.js';
import { CheckoutQueryDto } from './dto/checkout-query.dto.js';
import { CreateCheckoutDto } from './dto/create-checkout.dto.js';
let CheckoutController = class CheckoutController {
    checkoutService;
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    calculateDiscount(query, body) {
        return {
            success: true,
            message: 'Checkout calculated',
            data: this.checkoutService.calculateDiscount(body, query.member, query.coupon),
        };
    }
};
__decorate([
    Post('discount'),
    HttpCode(HttpStatus.OK),
    __param(0, Query()),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CheckoutQueryDto,
        CreateCheckoutDto]),
    __metadata("design:returntype", void 0)
], CheckoutController.prototype, "calculateDiscount", null);
CheckoutController = __decorate([
    Controller('checkout'),
    __metadata("design:paramtypes", [CheckoutService])
], CheckoutController);
export { CheckoutController };
//# sourceMappingURL=checkout.controller.js.map