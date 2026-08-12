import { Slide } from '~/components/Slide';
import LayoutDeck from '../../layouts/LayoutDeck';
import BookReviewSlides from './slides';
import { CareerBooks } from './slides/Career';
import { DevBooks } from './slides/DevBooks';
import { Fun } from './slides/Fun';
import { Intro } from './slides/Intro';
import { LifeBooks } from './slides/LifeBooks';
import { Outro } from './slides/Outro';
import { ProcessBooks } from './slides/Process';
import { AboutMe } from '~/components/AboutMe';
const SkillUpBookReview = () => {
  return (
    <>
      <LayoutDeck>
        <Slide>
          <img src="/skillup-logo.png" style={{ width: '400px' }} />
          <h2>Dev Books</h2>
          <p>30+ books you could/should/maybe read</p>
          <footer>Feb 2025</footer>
        </Slide>
        <AboutMe key="am" />

        <Intro key="intro" />
        <DevBooks key="dev-books" />
        <CareerBooks key="career-books" />
        <ProcessBooks key="process-books" />
        <LifeBooks key="life-books" />
        <Fun key="fun-books" />
        <Outro key="outro" />
      </LayoutDeck>
    </>
  );
};

export default SkillUpBookReview;
