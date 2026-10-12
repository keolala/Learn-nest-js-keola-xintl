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
import { Controller, Get, Param } from '@nestjs/common';
import { ConvertService } from './convert.service.js';
import { ConvertMeterDTO } from './dto/convert-meters.dto.js';
let ConvertController = class ConvertController {
    convertService;
    constructor(convertService) {
        this.convertService = convertService;
    }
    convertMeters(params) {
        return this.convertService.convertMeters(params);
    }
};
__decorate([
    Get("/length/:meters"),
    __param(0, Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ConvertMeterDTO]),
    __metadata("design:returntype", void 0)
], ConvertController.prototype, "convertMeters", null);
ConvertController = __decorate([
    Controller('convert'),
    __metadata("design:paramtypes", [ConvertService])
], ConvertController);
export { ConvertController };
//# sourceMappingURL=convert.controller.js.map