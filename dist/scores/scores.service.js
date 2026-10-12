var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let ScoresService = class ScoresService {
    calculateAverage(scores, passMark) {
        const count = scores.length;
        const total = scores.reduce((sum, score) => sum + score, 0);
        const average = Number((total / count).toFixed(1));
        const highest = Math.max(...scores);
        const lowest = Math.min(...scores);
        const passed = scores.filter((score) => score >= passMark).length;
        const failed = scores.filter((score) => score < passMark).length;
        return {
            count,
            average,
            highest,
            lowest,
            passMark,
            passed,
            failed,
        };
    }
};
ScoresService = __decorate([
    Injectable()
], ScoresService);
export { ScoresService };
//# sourceMappingURL=scores.service.js.map