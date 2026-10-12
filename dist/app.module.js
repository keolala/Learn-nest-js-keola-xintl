var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvertModule } from './convert/convert.module.js';
import { TaxModule } from './tax/tax.module.js';
import { ScoresModule } from './scores/scores.module.js';
import { BillsModule } from './bills/bills.module.js';
import { TemperatureModule } from './temperature/temperature.module.js';
import { CheckoutModule } from './checkout/checkout.module.js';
import { LoansModule } from './loans/loans.module.js';
import { ElectricityModule } from './electricity/electricity.module.js';
import { ParkingModule } from './parking/parking.module.js';
import { ShippingModule } from './shipping/shipping.module.js';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ConvertModule,
            TaxModule,
            ScoresModule,
            BillsModule,
            TemperatureModule,
            CheckoutModule,
            LoansModule,
            ElectricityModule,
            ParkingModule,
            ShippingModule,
        ],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map