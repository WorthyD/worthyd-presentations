import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';

export const Intro = () => {
  return (
    <>
      <Slide>
        <h2>What we are going to cover</h2>
        <ul>
          <li className="fragment">Previous Strategy</li>
          <li className="fragment">New Strategy</li>
          <li className="fragment">Automation and Documentation</li>
        </ul>
        <Note>
          <ul></ul>
        </Note>
      </Slide>
    </>
  );
};
