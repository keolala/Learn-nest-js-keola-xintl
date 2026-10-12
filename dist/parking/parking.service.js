var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let ParkingService = class ParkingService {
    calculateFee(hours, vehicle, weekend) {
        const rates = {
            motorcycle: 2000,
            car: 8000,
            bus: 15000,
        };
        const billedHours = Math.ceil(hours);
        const hourlyRate = rates[vehicle];
        const weekendSurcharge = weekend ? 0.2 : 0;
        const total = Math.round(billedHours * hourlyRate * (weekend ? 1.2 : 1));
        return {
            hours,
            billedHours,
            vehicle,
            weekend,
            hourlyRate,
            weekendSurcharge,
            total,
        };
    }
};
ParkingService = __decorate([
    Injectable()
], ParkingService);
export { ParkingService };
//# sourceMappingURL=parking.service.js.map