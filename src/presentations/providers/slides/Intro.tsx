import { Slide } from '../../../components/Slide';
import { AboutMe } from '../../../components/AboutMe';
export const Intro = () => {
  return (
    <>
      <Slide>
        <img src="/skillup-logo.png" style={{ width: '400px' }} />
        <h2>I can provide that!</h2>
      </Slide>
      <AboutMe key="am" />

      <Slide>
        <h2>What we are going to look at</h2>
        <ul>
          <li className="fragment">Scope of Providers</li>
          <li className="fragment">Dependency Providers</li>
          <li className="fragment">Bootstrapping an App</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Why are we going going to look at this?</h2>
        <ul>
          <li className="fragment">Back to basics</li>
          <li className="fragment">Standalone Components/Apps</li>
          <li className="fragment">Angular Updates (17+)</li>
        </ul>
      </Slide>
    </>
  );
};
