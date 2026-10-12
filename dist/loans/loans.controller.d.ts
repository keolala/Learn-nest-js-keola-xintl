import { LoansService } from './loans.service.js';
import { LoanParamsDto } from './dto/loan-params.dto.js';
import { LoanQueryDto } from './dto/loan-query.dto.js';
import { LoanBodyDto } from './dto/loan-body.dto.js';
export declare class LoansController {
    private readonly loansService;
    constructor(loansService: LoansService);
    calculateInstallment(params: LoanParamsDto, query: LoanQueryDto, body: LoanBodyDto): {
        success: boolean;
        message: string;
        data: {
            principal: number;
            currency: string;
            months: number;
            annualInterestRate: number;
            monthlyInterestRate: number;
            monthlyInstallment: number;
            totalPayment: number;
            totalInterest: number;
        };
    };
}
