import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('original.csv');
reader.read();

let manUtdWins = 0;

for (let match of reader.data) {
  if (match[0] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins++;
  }
}

console.log(`Man United has won ${manUtdWins} times!`);
