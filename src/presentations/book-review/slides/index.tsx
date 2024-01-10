import { Intro } from './Intro';
// import { ExistingLibraries } from './ExistingLibraries';
// import { Perks } from './Perks';
// import { Downsides } from './Downsides';
// import { Planning } from './Planning';
import { DevBooks } from './DevBooks';
import { Outro } from './Outro';
import { CareerBooks } from './Career';
import { ProcessBooks } from './Process';
import { LifeBooks } from './LifeBooks';
import { Fun } from './Fun';
export default [
  <Intro key="intro" />,
  <DevBooks key="dev-books" />,
  // If hemmingway wrote JS
  <CareerBooks key="career-books" />,
  <ProcessBooks key="process-books" />,
  <LifeBooks key="life-books" />,
  <Fun key="fun-books" />,
  // <ExistingLibraries key="existing-libraries" />,
  // <Perks key="perks" />,
  // <Downsides key="downsides" />,
  // <Planning key="planning" />,
  <Outro key="outro" />,
];
