var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let LoansService = class LoansService {
    calculateInstallment(principal, currency, body) {
        const { months, annualInterestRate } = body;
        const monthlyInterestRate = annualInterestRate / 12 / 100;
        let monthlyInstallment;
        if (monthlyInterestRate === 0) {
            monthlyInstallment = principal / months;
        }
        else {
            const r = monthlyInterestRate;
            const factor = Math.pow(1 + r, months);
            monthlyInstallment =
                principal * r * factor / (factor - 1);
        }
        monthlyInstallment = Math.round(monthlyInstallment);
        const totalPayment = monthlyInstallment * months;
        const totalInterest = totalPayment - principal;
        return {
            principal,
            currency,
            months,
            annualInterestRate,
            monthlyInterestRate,
            monthlyInstallment,
            totalPayment,
            totalInterest,
        };
    }
};
LoansService = __decorate([
    Injectable()
], LoansService);
export { LoansService };
//# sourceMappingURL=loans.service.js.map