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
        <div className="about-me__info">
          <h2>Daniel Worthy</h2>
          <h3>Software Engineer on Match</h3>
          <ul>
            <li className="fragment">Been with JBH since Fall 2023</li>
            <li className="fragment">Been building web apps 'professionally' since 2007</li>
            <li className="fragment">I like to build stuff -&gt; Wood, 3D printing, LEGO</li>
            <li className="fragment">Wife & I born 7 hours apart</li>
            {/* <li className="fragment">Own 422 LEGO Sets and 75K bricks</li>
            <li className="fragment">Oldest owned set is #580  Brick Yard from 1975</li> */}
          </ul>
        </div>
      </div>
    </Slide>
  );
};
