import { Slide } from '../../../components/Slide';
import { BookList, BookListProps } from '../../../components/BookList';
import { BookItem } from '../../../components/Book';
import { BookSlide } from './components/BookSlide';
import { BookGroup, BookGroupInfo } from './components/BookGroup';
import { TechCareerBookList } from './book-lists/TechCareerPath';
import { LeaderCareerBookList } from './book-lists/LeadershipCareerPath';

export const CareerBooks = () => (
  <>
    <BookGroup
      bookSlides={TechCareerBookList}
      title="Tech Mastery Career Path"
      subTitle="Anything but being the boss"
    />
    <BookGroup
      bookSlides={LeaderCareerBookList}
      title="Tech Leadership Career Path"
      subTitle=""
    />
  </>
);
