import { Slide } from '~/components/Slide';
import LayoutDeck from '../../layouts/LayoutDeck';
import { AboutMe } from '~/components/AboutMe';
import { Intro } from './slides/Intro';
import { Outro } from './slides/Outro';
import { Current } from './slides/current';
import { Strategy } from './slides/strategy';
import { Automation } from './slides/automation';
const WebRequests = () => {
  return (
    <>
      <LayoutDeck>
        <Slide>
          <h2>Web Requests in our Product</h2>
        </Slide>
        <AboutMe key="am" />
        <Intro key="intro" />
        <Current key="current" />
        <Strategy key="strategy" />
        <Automation key="automation" />
        <Outro key="outro" />
      </LayoutDeck>
    </>
  );
};

export default WebRequests;
