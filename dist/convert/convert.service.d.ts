import { ConvertMeterDTO } from './dto/convert-meters.dto.js';
export declare class ConvertService {
    convertMeters(params: ConvertMeterDTO): {
        success: boolean;
        message: string;
        data: {
            meter: number;
            kilometer: number;
            centiMeter: number;
            mils: number;
        };
    };
}
