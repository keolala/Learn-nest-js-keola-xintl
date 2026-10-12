export declare class ScoresService {
    calculateAverage(scores: number[], passMark: number): {
        count: number;
        average: number;
        highest: number;
        lowest: number;
        passMark: number;
        passed: number;
        failed: number;
    };
}
