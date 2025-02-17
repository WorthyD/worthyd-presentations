import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
export const DemoTime = () => {
  return (
    <>
      <Slide>
        <h2>Demo Time</h2>
      </Slide>
      <Slide>
        <h3>Breathe and Calm Your Nerves</h3>
        <Note>
          Know that your audience is already sympothetic towards you. <br />
          They know you are in a stressful situation <br />
          Mind you caffiene in take
        </Note>
      </Slide>
      <Slide>
        <h3>Slow Down</h3>
        <Note>
          Let users see the flow of your mouse movements and actions <br />
          for FE use JS to pre populate large form fields, but let users know
        </Note>
      </Slide>
      <Slide>
        <h3>Don't demo off local</h3>
        <Note>
          Demo somewhere that your audience could potentially use what you just went through.
          <br />
          Best place: Prod if it deosn't impact business
          <br />
          BE demos can be challenging. Swagger is acceptable givin the audience.
        </Note>
      </Slide>
      <Slide>
        <h3>Make sure your audience can see what you are doing</h3>
        <Note>
          Set your screen resolution to something small enough for them to see. <br />
          Zoom in on 4K monitors
        </Note>
      </Slide>
      <Slide>
        <h3>Be Presentable</h3>
        <Note>
          Have your camera on, remember part of this is to get your face and voice to a broader audience
          <br />
          Face the camera if possible so it looks like you are talking to the audience. <br />
          Invest in your mic or camera setup if appropriate.
        </Note>
      </Slide>
      <Slide>
        <h3>Use tools to enhance your demo</h3>
        <ul>
          <li>
            <a href="https://learn.microsoft.com/en-us/sysinternals/downloads/zoomit" target="_blank">
              ZoomIt
            </a>
          </li>
          <li>
            <a href="http://carnackeys.com/" target="_blank">
              CarnacKeys
            </a>
          </li>
          <li>
            <a href="https://www.autohotkey.com/" target="_blank">
              AutoHotkey
            </a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h3>Be Mindful of Interruptions</h3>
        <Note>
          Questions will come up that may throw you off your cadence. <br />
          Do your best to curb long conversations. It's a demo, not a feedback session... unless it's a feedback session <br />
          Commit to absolutely nothing. Say 'We can add it to the backlog and we can look into it in the future' <br />
          "That's beyond the scope of this meeting, let's revisit that later."
          <br />
          Accept all feedback, but commit to nothing." <br />
          We are aware of the situation and we have a taskforce working on it.
        </Note>
      </Slide>
      <Slide>
        <h3>Slow Down Again</h3>
        <Note>
          Let users see the flow of your mouse movements and actions <br />
          for FE use JS to pre populate large form fields, but let users know
        </Note>
      </Slide>

      <Slide>
        <h3>Celebrate the wins and your team</h3>
        <Note>
          You are not just celebrating completed work, but the people who contributed to it
          <br />
          Acknoledge the BE Devs that provide endpoints <br />
          Acknowledge POs for answering questions
        </Note>
      </Slide>
      <Slide>
        <h3>Recognize the challenges (if appropriate)</h3>
        <Note>
          Never throw another teammate or team under the bus.
          <br /> expressing frustration is for a Retro
        </Note>
      </Slide>
      <Slide>
        <h3>Fall back plan</h3>
        <h5>What happens if you loose internet, have an outage, or get hit by a bus?</h5>
        <Note>
          Have a backup presenter <br />
          Record at a later date and send a link
        </Note>
      </Slide>
    </>
  );
};
