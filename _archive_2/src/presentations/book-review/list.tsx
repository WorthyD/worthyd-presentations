import LayoutDeck from '../../layouts/LayoutDeck';
import BookReviewSlides from './slides';

import { DevBookList } from './slides/book-lists/DevBookList';
import { LifeBookList } from './slides/book-lists/LifeBookList';
import { TeamWorkBookList } from './slides/book-lists/TeamWorkBooks';
import { TechCareerBookList } from './slides/book-lists/TechCareerPath';
import { LeaderCareerBookList } from './slides/book-lists/LeadershipCareerPath';
import { FunBookList } from './slides/book-lists/FunBooks';
import './list.scss';

const SkillUpBookList = () => {
  return (
    <>
      <main>
        <h2>Dev Books</h2>
        {boolList(DevBookList)}

        <h2>Tech Career Path</h2>
        {boolList(TechCareerBookList)}
        <h2>Tech Leadership Career Path</h2>
        {boolList(LeaderCareerBookList)}
        <h2>Teamwork and Process</h2>
        {boolList(TeamWorkBookList)}
        <h2>Tech Life Books</h2>
        {boolList(LifeBookList)}
        <h2>"Fun" books video games and comradery</h2>
        {boolList(FunBookList)}
      </main>
    </>
  );
};

const boolList = (books) => {
  return (
    <div>
      {books.map((bs, i) => (
        <section>
          <ul>
            {bs.books.map((b, j) => (
              <li>
                <h4>
                  {b.title} - {b.author} &nbsp;
                  {b.amazon && (
                    <a href={b.amazon} target="_blank">
                      Book
                    </a>
                  )}
                  &nbsp;
                  {b.audible && (
                    <a href={b.audible} target="_blank">
                      Audio
                    </a>
                  )}
                </h4>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default SkillUpBookList;
