import { Injectable } from '@nestjs/common';

@Injectable()
export class ParkingService {
  calculateFee(hours: number, vehicle: string, weekend: boolean) {
    const rates = {
      motorcycle: 2000,
      car: 8000,
      bus: 15000,
    };

    const billedHours = Math.ceil(hours);
    const hourlyRate = rates[vehicle as keyof typeof rates];
    const weekendSurcharge = weekend ? 0.2 : 0;

    const total = Math.round(
      billedHours * hourlyRate * (weekend ? 1.2 : 1),
    );

    return {
      hours,
      billedHours,
      vehicle,
      weekend,
      hourlyRate,
      weekendSurcharge,
      total,
    };
  }
}