import { ElectricityBillDto } from './dto/electricity-bill.dto.js';
export declare class ElectricityService {
    calculateElectricityBill(dto: ElectricityBillDto): {
        customerName: string;
        usageKwh: number;
        baseFee: number;
        usageFee: number;
        subtotal: number;
        taxRate: number;
        tax: number;
        total: number;
    };
}
