import { Slide } from '../../../components/Slide';
import { AboutMe } from '../../../components/AboutMe';
export const Intro = () => (
  <>
    <Slide>
      <h2>I can provide that!</h2>
      <p>
        What's up with providers and how to use them in Standalone components.
      </p>
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
  </>
);
