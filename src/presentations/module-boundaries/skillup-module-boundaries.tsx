import { Slide } from '~/components/Slide';
import LayoutDeck from '../../layouts/LayoutDeck';
import { Intro } from './slides/Intro';
import { Types } from './slides/Types';
import { Scopes } from './slides/Scopes';
import { Enforcement } from './slides/Enforcement';

import { AboutMe } from '~/components/AboutMe';
import { Outro } from './slides/Outro';
const SkillUpModuleBoundaries = () => {
  return (
    <>
      <LayoutDeck>
        <Slide>
          <img src="/skillup-logo.png" style={{ width: '300px' }} />
          <h2>Module Boundaries</h2>
          <p  className="small-text">
            <s>Rules</s> Guidelines for structuring your code
          </p>
          <img src="/qr-modules.png" style={{ width: '150px' }} />
        </Slide>
        <AboutMe key="am" />
        <Intro key="intro" />
        <Types key="types" />
        <Scopes key="scopes" />
        <Enforcement key="enforcement" />
        <Outro key="outro" />
      </LayoutDeck>
    </>
  );
};

export default SkillUpModuleBoundaries;
