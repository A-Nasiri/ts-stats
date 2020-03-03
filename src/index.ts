import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('original.csv');
reader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUtdWins = 0;

for (let match of reader.data) {
  if (match[0] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins++;
  }
}

console.log(`Man United has won ${manUtdWins} times!`);
