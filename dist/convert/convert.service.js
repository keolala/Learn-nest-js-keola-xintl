var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let ConvertService = class ConvertService {
    convertMeters(params) {
        const meter = params.meters;
        const kilometer = meter / 1000;
        const centiMeter = meter * 100;
        const mils = meter * 39370.1;
        return {
            success: true,
            message: 'Length has converted',
            data: {
                meter,
                kilometer,
                centiMeter,
                mils
            }
        };
    }
};
ConvertService = __decorate([
    Injectable()
], ConvertService);
export { ConvertService };
//# sourceMappingURL=convert.service.js.map