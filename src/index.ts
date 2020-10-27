import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();


summary.buildAndPrintReport(matchReader.matches);