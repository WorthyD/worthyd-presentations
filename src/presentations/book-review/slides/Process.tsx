import { Slide } from '../../../components/Slide';
import { BookList, BookListProps } from '../../../components/BookList';
import { BookItem } from '../../../components/Book';
import { BookSlide } from './components/BookSlide';
import { BookGroup, BookGroupInfo } from './components/BookGroup';

import {TeamWorkBookList} from './book-lists/TeamWorkBooks';

export const ProcessBooks = () => (
  <>
    <BookGroup
      bookSlides={TeamWorkBookList}
      title="Teamwork & Process Books"
      subTitle=""
    />
  </>
);
