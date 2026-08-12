import { Intro } from './Intro';
import { Outro } from './Outro';
import { ProvideIn } from './ProvideIn';
import { Bootstrapping } from './Bootstrapping';
import { DependencyInjection } from './DependencyInjection';
export default [
  <Intro key="intro" />,

  <ProvideIn key="provide-in" />,
  <DependencyInjection key="DependencyInjection" />,
  <Bootstrapping key="bootstrapping" />,
  <Outro key="outro" />,
];
