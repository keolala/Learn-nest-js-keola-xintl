import { Module } from '@nestjs/common';

import { ElectricityController } from './electricity.controller.js';
import { ElectricityService } from './electricity.service.js';

@Module({
  controllers: [ElectricityController],
  providers: [ElectricityService],
})
export class ElectricityModule {}
