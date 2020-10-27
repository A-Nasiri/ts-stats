import { OutputTarget } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class ConsoleReport implements OutputTarget {
    print(report: string): void {
        console.log(report);
    }
}