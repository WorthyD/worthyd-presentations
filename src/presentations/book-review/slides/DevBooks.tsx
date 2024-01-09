import { Slide } from '../../../components/Slide';
import { BookList, BookListProps } from '../../../components/BookList';
import { BookItem } from '../../../components/Book';
import { BookSlide } from './components/BookSlide';
import { BookGroup, BookGroupInfo } from './components/BookGroup';

import { DevBookList } from './book-lists/DevBookList';

export const DevBooks = () => (
  <>
    <BookGroup
      bookSlides={DevBookList}
      title="Developer Books"
      subTitle="Valuable, but potentially boring"
    />
  </>
);
