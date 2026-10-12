import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { ElectricityService } from './electricity.service.js';
import { ElectricityBillDto } from './dto/electricity-bill.dto.js';

@Controller('bills')
export class ElectricityController {
  constructor(
    private readonly electricityService: ElectricityService,
  ) {}

  @Post('electricity')
  @HttpCode(HttpStatus.OK)
  calculateElectricityBill(
    @Body() dto: ElectricityBillDto,
  ) {
    return {
      success: true,
      message: 'Electricity bill calculated',
      data: this.electricityService.calculateElectricityBill(dto),
    };
  }
}