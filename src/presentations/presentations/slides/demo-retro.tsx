import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
export const DemoRetro = () => {
  return (
    <>
      <Slide>
        <h2>After the Demo</h2>
      </Slide>
      <Slide>
        <h3>Follow up with your note taker</h3>
        <Note>Get appropriate requests or bugs into the</Note>
      </Slide>
      <Slide>
        <h3>Retro the demo</h3>
        <Note>
          Find something to work on <br />
          Designate the next demo-er on rotation
        </Note>
      </Slide>
      <Slide>
        <h2>Next Steps as a speaker?</h2>
        <Note>
          Offer to demo your product to a broader audience.
          <br />
          Toastmasters?
        </Note>
      </Slide>
    </>
  );
};
