import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

//Create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something
//satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


