import { BillsService } from './bills.service.js';
import { SplitBillParamsDto } from './dto/split-bill-params.dto.js';
import { SplitBillDto } from './dto/split-bill.dto.js';
export declare class BillsController {
    private readonly billsService;
    constructor(billsService: BillsService);
    splitBill(params: SplitBillParamsDto, body: SplitBillDto): {
        success: boolean;
        message: string;
        data: {
            peopleCount: number;
            subtotal: number;
            tipPercent: number;
            tip: number;
            total: number;
            perPerson: number;
        };
    };
}
