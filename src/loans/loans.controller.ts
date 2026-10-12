import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { LoansService } from './loans.service.js';
import { LoanParamsDto } from './dto/loan-params.dto.js';
import { LoanQueryDto } from './dto/loan-query.dto.js';
import { LoanBodyDto } from './dto/loan-body.dto.js';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post(':principal/installment')
  @HttpCode(HttpStatus.OK)
  calculateInstallment(
    @Param() params: LoanParamsDto,
    @Query() query: LoanQueryDto,
    @Body() body: LoanBodyDto,
  ) {
    return {
      success: true,
      message: 'Installment calculated',
      data: this.loansService.calculateInstallment(
        params.principal,
        query.currency,
        body,
      ),
    };
  }
}