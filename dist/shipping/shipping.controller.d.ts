import { ShippingService } from './shipping.service.js';
import { ShippingParamsDto } from './dto/shipping-params.dto.js';
import { ShippingQueryDto } from './dto/shipping-query.dto.js';
import { ShippingBodyDto } from './dto/shipping-body.dto.js';
export declare class ShippingController {
    private readonly shippingService;
    constructor(shippingService: ShippingService);
    calculateCost(params: ShippingParamsDto, query: ShippingQueryDto, body: ShippingBodyDto): {
        success: boolean;
        message: string;
        data: {
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
    };
}
