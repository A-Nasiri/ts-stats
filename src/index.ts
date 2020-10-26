import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

//Create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something
//satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


let manUtdWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins++;
  }
}

console.log(`Man United has won ${manUtdWins} times!`); 
