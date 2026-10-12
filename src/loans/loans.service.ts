
import { Injectable } from '@nestjs/common';
import { LoanBodyDto } from './dto/loan-body.dto.js';

@Injectable()
export class LoansService {
  calculateInstallment(
    principal: number,
    currency: string,
    body: LoanBodyDto,
  ) {
    const { months, annualInterestRate } = body;

    // Bunga bulanan dalam bentuk desimal.
    const monthlyInterestRate =
      annualInterestRate / 12 / 100;

    let monthlyInstallment: number;

    if (monthlyInterestRate === 0) {
      monthlyInstallment = principal / months;
    } else {
      const r = monthlyInterestRate;
      const factor = Math.pow(1 + r, months);

      monthlyInstallment =
        principal * r * factor / (factor - 1);
    }

    // Bulatkan cicilan bulanan ke bilangan bulat.
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
}