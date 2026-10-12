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
import { BadRequestException, Controller, Get, Param, Query, } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { TemperatureParamsDto } from './dto/temperature-params.dto.js';
import { TemperatureQueryDto } from './dto/temperature-query.dto.js';
let TemperatureController = class TemperatureController {
    temperatureService;
    constructor(temperatureService) {
        this.temperatureService = temperatureService;
    }
    convertTemperature(params, query) {
        if (query.from === query.to) {
            throw new BadRequestException('Source and target units must be different');
        }
        return {
            success: true,
            message: 'Temperature converted',
            data: this.temperatureService.convertTemperature(params.value, query.from, query.to),
        };
    }
};
__decorate([
    Get(':value'),
    __param(0, Param()),
    __param(1, Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TemperatureParamsDto,
        TemperatureQueryDto]),
    __metadata("design:returntype", void 0)
], TemperatureController.prototype, "convertTemperature", null);
TemperatureController = __decorate([
    Controller('convert/temperature'),
    __metadata("design:paramtypes", [TemperatureService])
], TemperatureController);
export { TemperatureController };
//# sourceMappingURL=temperature.controller.js.map