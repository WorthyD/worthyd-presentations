import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
export const SpeakingTiers = () => {
  return (
    <>
      <Slide>
        <h3>Speaking Tiers</h3>
        <ul>
          <li className="fragment">Sprint/Product Demo</li>
          <li className="fragment">Book Club</li>
          <li className="fragment">SkillUp / Internal Training</li>
          <li className="fragment">Community Meetup / Local Convention</li>
          <li className="fragment">Running Connections / About Me</li>
        </ul>
        <Note>
          Speaking is an essential soft skill for developers
        </Note>
      </Slide>
    </>
  );
};
