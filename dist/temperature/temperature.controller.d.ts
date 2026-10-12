import { TemperatureService } from './temperature.service.js';
import { TemperatureParamsDto } from './dto/temperature-params.dto.js';
import { TemperatureQueryDto } from './dto/temperature-query.dto.js';
export declare class TemperatureController {
    private readonly temperatureService;
    constructor(temperatureService: TemperatureService);
    convertTemperature(params: TemperatureParamsDto, query: TemperatureQueryDto): {
        success: boolean;
        message: string;
        data: {
            value: number;
            from: string;
            to: string;
            result: number;
        };
    };
}
