import { Injectable } from '@nestjs/common';
import { ConvertMeterDTO } from './dto/convert-meters.dto.js';
import { Length } from 'class-validator';

@Injectable()
export class ConvertService {
    convertMeters(params: ConvertMeterDTO) {
        const meter = params.meters
        const kilometer = meter /1000
        const centiMeter = meter * 100
        const mils = meter * 39370.1


        return {
            success: true,
            message: 'Length has converted',
    data: { 
        meter,
        kilometer,
        centiMeter,
        mils
    }
}
}
}
