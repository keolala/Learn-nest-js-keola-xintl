import { ShippingBodyDto } from './dto/shipping-body.dto.js';
export declare class ShippingService {
    calculateCost(city: string, express: boolean, insurance: boolean, body: ShippingBodyDto): {
        city: string;
        express: boolean;
        insurance: boolean;
        weightKg: number;
        volumetricKg: number;
        chargeableKg: number;
        baseFare: number;
        expressFee: number;
        insuranceFee: number;
        total: number;
    };
}
