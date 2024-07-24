import { Slide } from '../../components/Slide';
import './styles.scss';

export const AboutMe = () => {
  function getImageUrl() {
    return new URL(`/src/assets/family.png`, import.meta.url).href;
  }
  return (
    <Slide>
      <div className="about-me">
        <img src={getImageUrl()} />
        <h2>Daniel Worthy</h2>
        <h3>I like to build stuff</h3>
        <ul>
            <li>Own 422 LEGO Sets and 75K bricks</li>
            <li>Oldest owned set is #580 from 1975</li>
        </ul>


      </div>
    </Slide>
  );
};
