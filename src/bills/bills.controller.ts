
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

import { BillsService } from './bills.service.js';
import { SplitBillParamsDto } from './dto/split-bill-params.dto.js';
import { SplitBillDto } from './dto/split-bill.dto.js';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post(':peopleCount/split')
  @HttpCode(HttpStatus.OK)
  splitBill(
    @Param() params: SplitBillParamsDto,
    @Body() body: SplitBillDto,
  ) {
    return {
      success: true,
      message: 'Bill split',
      data: this.billsService.splitBill(
        params.peopleCount,
        body,
      ),
    };
  }
}
