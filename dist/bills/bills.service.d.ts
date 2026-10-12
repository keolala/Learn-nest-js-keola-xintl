import { SplitBillDto } from './dto/split-bill.dto.js';
export declare class BillsService {
    splitBill(peopleCount: number, body: SplitBillDto): {
        peopleCount: number;
        subtotal: number;
        tipPercent: number;
        tip: number;
        total: number;
        perPerson: number;
    };
}
