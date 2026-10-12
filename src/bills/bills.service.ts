
import { Injectable } from '@nestjs/common';
import { SplitBillDto } from './dto/split-bill.dto.js';

@Injectable()
export class BillsService {
  splitBill(peopleCount: number, body: SplitBillDto) {
    const subtotal: number = body.items.reduce(
      (sum: number, item: { price: number; qty: number }) =>
        sum + item.price * item.qty,
      0,
    );

    const tipPercent = body.tipPercent ?? 0;
    const tip = subtotal * (tipPercent / 100);
    const total = subtotal + tip;
    const perPerson = Math.round(total / peopleCount);

    return {
      peopleCount,
      subtotal,
      tipPercent,
      tip,
      total,
      perPerson,
    };
  }
}