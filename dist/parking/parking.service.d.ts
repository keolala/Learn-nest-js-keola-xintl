export declare class ParkingService {
    calculateFee(hours: number, vehicle: string, weekend: boolean): {
        hours: number;
        billedHours: number;
        vehicle: string;
        weekend: boolean;
        hourlyRate: number;
        weekendSurcharge: number;
        total: number;
    };
}
