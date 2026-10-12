import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';

import { ElectricityBillDto } from './dto/electricity-bill.dto.js';

@Injectable()
export class ElectricityService {
  calculateElectricityBill(dto: ElectricityBillDto) {
    const customerName = dto.customerName.trim();

    const { previousKwh, currentKwh } = dto.meter;
    const { baseFee, perKwh, taxRate = 11 } = dto.rates;

    if (currentKwh <= previousKwh) {
      throw new BadRequestException(
        'currentKwh must be greater than previousKwh',
      );
    }

    const usageKwh = currentKwh - previousKwh;
    const usageFee = usageKwh * perKwh;
    const subtotal = baseFee + usageFee;
    const tax = subtotal * taxRate / 100;
    const total = subtotal + tax;

    return {
      customerName,
      usageKwh,
      baseFee,
      usageFee,
      subtotal,
      taxRate,
      tax,
      total,
    };
  }
}
