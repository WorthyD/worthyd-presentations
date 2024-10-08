import { Slide } from '../../../components/Slide';
import { AboutMe } from '../../../components/AboutMe';
import { Note } from '~/components/Notes';
export const Intro = () => {
  return (
    <>
      <Slide>
        <img src="/skillup-logo.png" style={{ width: '400px' }} />
        <h2>I can provide that!</h2>
        <img src="/qr-providers.png" style={{ width: '150px' }} />
      </Slide>
      <AboutMe key="am" />

      <Slide>
        <h2>What we are going to look at?</h2>
        <h3 className="fragment">Dependency Injection!</h3>
        <ul>
          <li className="fragment">Scope of Providers</li>
          <li className="fragment">Dependency Providers</li>
          <li className="fragment">Bootstrapping an App</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Why are we going going to look at this?</h2>
        <ul>
          <li className="fragment">It's important!</li>
          <li className="fragment">Back to basics</li>
          <li className="fragment">Standalone Components/Apps</li>
          <li className="fragment">Angular Updates (17+)</li>
        </ul>
        <Note>
          DI provides us the ability to make our code portable and abstract complex functionality.
          <br />
          Lots of value in going back and looking at basic functionality.
          <br />
          Things a little bit different in standalone world
          <br />
          Some APIs are changing in newer versions of angular
        </Note>
      </Slide>
    </>
  );
};
