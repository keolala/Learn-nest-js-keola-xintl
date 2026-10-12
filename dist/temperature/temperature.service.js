var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let TemperatureService = class TemperatureService {
    convertTemperature(value, from, to) {
        let celsius;
        if (from === 'C') {
            celsius = value;
        }
        else if (from === 'F') {
            celsius = (value - 32) * 5 / 9;
        }
        else {
            celsius = value - 273.15;
        }
        let result;
        if (to === 'C') {
            result = celsius;
        }
        else if (to === 'F') {
            result = celsius * 9 / 5 + 32;
        }
        else {
            result = celsius + 273.15;
        }
        result = Math.round((result + Number.EPSILON) * 100) / 100;
        return { value, from, to, result };
    }
};
TemperatureService = __decorate([
    Injectable()
], TemperatureService);
export { TemperatureService };
//# sourceMappingURL=temperature.service.js.map