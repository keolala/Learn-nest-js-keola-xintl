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
import { LoansService } from './loans.service.js';
import { LoanParamsDto } from './dto/loan-params.dto.js';
import { LoanQueryDto } from './dto/loan-query.dto.js';
import { LoanBodyDto } from './dto/loan-body.dto.js';
let LoansController = class LoansController {
    loansService;
    constructor(loansService) {
        this.loansService = loansService;
    }
    calculateInstallment(params, query, body) {
        return {
            success: true,
            message: 'Installment calculated',
            data: this.loansService.calculateInstallment(params.principal, query.currency, body),
        };
    }
};
__decorate([
    Post(':principal/installment'),
    HttpCode(HttpStatus.OK),
    __param(0, Param()),
    __param(1, Query()),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoanParamsDto,
        LoanQueryDto,
        LoanBodyDto]),
    __metadata("design:returntype", void 0)
], LoansController.prototype, "calculateInstallment", null);
LoansController = __decorate([
    Controller('loans'),
    __metadata("design:paramtypes", [LoansService])
], LoansController);
export { LoansController };
//# sourceMappingURL=loans.controller.js.map