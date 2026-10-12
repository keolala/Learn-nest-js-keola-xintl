export declare class TaxService {
    calculateTax(amount: number, rate: number, inclusive: boolean): {
        amount: number;
        rate: number;
        inclusive: boolean;
        tax: number;
        net: number;
        gross: number;
    };
}
