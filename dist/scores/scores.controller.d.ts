import { ScoresService } from './scores.service.js';
import { ScoreAverageDto } from './dto/score-average.dto.js';
export declare class ScoresController {
    private readonly scoresService;
    constructor(scoresService: ScoresService);
    calculateAverage(body: ScoreAverageDto): {
        success: boolean;
        message: string;
        data: {
            count: number;
            average: number;
            highest: number;
            lowest: number;
            passMark: number;
            passed: number;
            failed: number;
        };
    };
}
