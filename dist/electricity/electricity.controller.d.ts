import { ElectricityService } from './electricity.service.js';
import { ElectricityBillDto } from './dto/electricity-bill.dto.js';
export declare class ElectricityController {
    private readonly electricityService;
    constructor(electricityService: ElectricityService);
    calculateElectricityBill(dto: ElectricityBillDto): {
        success: boolean;
        message: string;
        data: {
            customerName: string;
            usageKwh: number;
            baseFee: number;
            usageFee: number;
            subtotal: number;
            taxRate: number;
            tax: number;
            total: number;
        };
    };
}
