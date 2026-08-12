import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
export const DemoPrep = () => {
  return (
    <>
       <Slide>
          <h3>Prep Time!</h3>
          <h4>What do you need to do be properly prepared?</h4>
          <Note>Prepping is important. A poor demo in front an important group makes the whole team look bad.</Note>
        </Slide>
        <Slide>
          <h3>Prep Level</h3>
          <ul>
            <li className="fragment">Upper Management / Clients</li>
            <li className="fragment">Full Team / Book Club</li>
            <li className="fragment">Squad / Traditional Sprint Demo</li>
            <li className="fragment">Sub-squad / Peers / Demo Dry Run</li>
          </ul>
          <Note>Do your best based on your audience. A poor demo can look bad for the whole team</Note>
        </Slide>

        <Slide>
          <h3>Rotate your sprint demoers!</h3>
          <Note>It's good practice. It's good exposure when clients/stakeholders are on the call</Note>
        </Slide>
        <Slide>
          <h3>Determine what you are going to demo</h3>
          <Note>
            Something visual, Web UI is great, but DB diagrams are fine too.
            <br />
            NO SMOKE AND MIRRORS!
          </Note>
        </Slide>
        <Slide>
          <h3>Make a Script!</h3>
          <h4>Stick to your script</h4>
          <Note>
            plan click by click <br />
            Can be as simple a postet not
          </Note>
        </Slide>
        <Slide>
          <h3>Designate a Note Taker</h3>
          <Note>Don't pause during your demo to write stuff down</Note>
        </Slide>
        <Slide>
          <h3>Find something you are going to do better than last time.</h3>
          <Note>
            <ul>
              <li>Say 'Um' fewer times</li>
              <li>Give praise more</li>
              <li>Stay on script</li>
            </ul>
          </Note>
        </Slide>
        <Slide>
          <h3>Walk through your demo a couple of times</h3>
        </Slide>
    </>
  );
};
