import { LoanBodyDto } from './dto/loan-body.dto.js';
export declare class LoansService {
    calculateInstallment(principal: number, currency: string, body: LoanBodyDto): {
        principal: number;
        currency: string;
        months: number;
        annualInterestRate: number;
        monthlyInterestRate: number;
        monthlyInstallment: number;
        totalPayment: number;
        totalInterest: number;
    };
}
