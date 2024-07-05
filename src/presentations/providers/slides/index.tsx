import { Intro } from './Intro';
import { Outro } from './Outro';
import { ProvideIn } from './ProvideIn';
import { Bootstrapping } from './Bootstrapping';
import {DependencyInjection} from './DependencyInjection';
export default [
  <Intro key="intro" />,
  <ProvideIn key="provide-in" />,
  <Bootstrapping key="bootstrapping" />,
  <DependencyInjection key="DependencyInjection" />,
  <Outro key="outro" />,
];
