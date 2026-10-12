import { ConvertService } from './convert.service.js';
import { ConvertMeterDTO } from './dto/convert-meters.dto.js';
export declare class ConvertController {
    private readonly convertService;
    constructor(convertService: ConvertService);
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
