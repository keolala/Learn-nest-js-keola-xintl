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
import { Body, Controller, HttpCode, HttpStatus, Param, Post, Query, } from '@nestjs/common';
import { ShippingService } from './shipping.service.js';
import { ShippingParamsDto } from './dto/shipping-params.dto.js';
import { ShippingQueryDto } from './dto/shipping-query.dto.js';
import { ShippingBodyDto } from './dto/shipping-body.dto.js';
let ShippingController = class ShippingController {
    shippingService;
    constructor(shippingService) {
        this.shippingService = shippingService;
    }
    calculateCost(params, query, body) {
        return {
            success: true,
            message: 'Shipping cost calculated',
            data: this.shippingService.calculateCost(params.city, query.express, query.insurance, body),
        };
    }
};
__decorate([
    Post(':city'),
    HttpCode(HttpStatus.OK),
    __param(0, Param()),
    __param(1, Query()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ShippingParamsDto,
        ShippingQueryDto,
        ShippingBodyDto]),
    __metadata("design:returntype", void 0)
], ShippingController.prototype, "calculateCost", null);
ShippingController = __decorate([
    Controller('shipping'),
    __metadata("design:paramtypes", [ShippingService])
], ShippingController);
export { ShippingController };
//# sourceMappingURL=shipping.controller.js.map