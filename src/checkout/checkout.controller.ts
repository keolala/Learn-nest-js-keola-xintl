
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';

import { CheckoutService } from './checkout.service.js';
import { CheckoutQueryDto } from './dto/checkout-query.dto.js';
import { CreateCheckoutDto } from './dto/create-checkout.dto.js';

@Controller('checkout')
export class CheckoutController {
  constructor(
    private readonly checkoutService: CheckoutService,
  ) {}

  @Post('discount')
  @HttpCode(HttpStatus.OK)
  calculateDiscount(
    @Query() query: CheckoutQueryDto,
    @Body() body: CreateCheckoutDto,
  ) {
    return {
      success: true,
      message: 'Checkout calculated',
      data: this.checkoutService.calculateDiscount(
        body,
        query.member,
        query.coupon,
      ),
    };
  }
}