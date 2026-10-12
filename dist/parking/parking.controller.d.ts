import { ParkingService } from './parking.service.js';
import { ParkingParamsDto } from './dto/parking-params.dto.js';
import { ParkingQueryDto } from './dto/parking-query.dto.js';
export declare class ParkingController {
    private readonly parkingService;
    constructor(parkingService: ParkingService);
    calculateFee(params: ParkingParamsDto, query: ParkingQueryDto): {
        success: boolean;
        message: string;
        data: {
            hours: number;
            billedHours: number;
            vehicle: string;
            weekend: boolean;
            hourlyRate: number;
            weekendSurcharge: number;
            total: number;
        };
    };
}
