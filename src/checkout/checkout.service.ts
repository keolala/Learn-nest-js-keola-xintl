
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateCheckoutDto } from './dto/create-checkout.dto.js';

@Injectable()
export class CheckoutService {
  calculateDiscount(
    body: CreateCheckoutDto,
    member: boolean,
    coupon?: string,
  ) {
    const subtotal = body.items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0,
    );


    const memberDiscount = member ? subtotal * 0.05 : 0;


    let couponDiscount = 0;

    if (coupon === undefined) {
      couponDiscount = 0;
    } else if (coupon === 'HEMAT10') {
      couponDiscount = subtotal * 0.10;
    } else if (coupon === 'HEMAT20') {
      couponDiscount = subtotal * 0.20;
    } else if (coupon === 'FREESHIP') {
      couponDiscount = 0;
    } else {
      throw new NotFoundException('Coupon not found');
    }

    const totalDiscount = memberDiscount + couponDiscount;
    const grandTotal = subtotal - totalDiscount;

    return {
      subtotal,
      member,
      ...(coupon !== undefined ? { coupon } : {}),
      discounts: {
        member: memberDiscount,
        coupon: couponDiscount,
        total: totalDiscount,
      },
      grandTotal,
    };
  }
}
