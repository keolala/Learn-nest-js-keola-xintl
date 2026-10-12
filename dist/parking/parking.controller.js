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
import { Controller, Get, Param, Query, } from '@nestjs/common';
import { ParkingService } from './parking.service.js';
import { ParkingParamsDto } from './dto/parking-params.dto.js';
import { ParkingQueryDto } from './dto/parking-query.dto.js';
let ParkingController = class ParkingController {
    parkingService;
    constructor(parkingService) {
        this.parkingService = parkingService;
    }
    calculateFee(params, query) {
        return {
            success: true,
            message: 'Parking fee calculated',
            data: this.parkingService.calculateFee(params.hours, query.vehicle, query.weekend),
        };
    }
};
__decorate([
    Get(':hours'),
    __param(0, Param()),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ParkingParamsDto,
        ParkingQueryDto]),
    __metadata("design:returntype", void 0)
], ParkingController.prototype, "calculateFee", null);
ParkingController = __decorate([
    Controller('parking'),
    __metadata("design:paramtypes", [ParkingService])
], ParkingController);
export { ParkingController };
//# sourceMappingURL=parking.controller.js.map