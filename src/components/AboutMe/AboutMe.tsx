import { Slide } from '../../components/Slide';
import './styles.scss';

export const AboutMe = () => {
  const randomFaqs = [
    'Wife & I born 12-ish hours apart',
    'Own 455 LEGO Sets and 95K bricks',
    'I played 3 different instruments in grade school band',
    'I once built a bench out of two Mac Pro Towers',
    'I think David Tennant is the best Doctor',
    'I have visited the Jedi Temple Island',
    'I think MM3 is superior to MM2',
  ];
  const randomFaq = randomFaqs[Math.floor(Math.random()*randomFaqs.length)];

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
            {/* <li className="fragment">Wife & I born 12-ish hours apart</li> */}
            <li className="fragment">{randomFaq}</li>
            {/* <li className="fragment">Own 422 LEGO Sets and 75K bricks</li>
            <li className="fragment">Oldest owned set is #580  Brick Yard from 1975</li> */}
          </ul>
        </div>
      </div>
    </Slide>
  );
};
