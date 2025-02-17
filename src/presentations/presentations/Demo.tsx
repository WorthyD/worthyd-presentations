import LayoutDeck from '../../layouts/LayoutDeck';
import { Slide } from '../../components/Slide';
//import ProviderSlides from './slides';
import { DemoIntro } from './slides/demo-intro';
import { SpeakingTiers } from './slides/speaking-tiers';

import { Note } from '~/components/Notes';
import { DemoDescription } from './slides/demo-description';
import { DemoPrep } from './slides/demo-prep';
import { DemoTime } from './slides/demo-time';
import { DemoRetro } from './slides/demo-retro';
const Providers = () => {
  return (
    <>
      <LayoutDeck>
        <DemoIntro />
        <SpeakingTiers />
        <DemoDescription />
        <DemoPrep />
        <DemoTime />
        <DemoRetro />
      </LayoutDeck>
    </>
  );
};

export default Providers;
