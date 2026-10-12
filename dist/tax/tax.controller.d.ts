import { TaxService } from './tax.service.js';
import { TaxQueryDto } from './dto/tax-query.dto.js';
export declare class TaxController {
    private readonly taxService;
    constructor(taxService: TaxService);
    calculateTax(query: TaxQueryDto): {
        success: boolean;
        message: string;
        data: {
            amount: number;
            rate: number;
            inclusive: boolean;
            tax: number;
            net: number;
            gross: number;
        };
    };
}
