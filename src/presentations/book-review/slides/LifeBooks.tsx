import { Slide } from '../../../components/Slide';
import { BookList, BookListProps } from '../../../components/BookList';
import { BookItem } from '../../../components/Book';
import { BookSlide } from './components/BookSlide';
import { BookGroup, BookGroupInfo } from './components/BookGroup';

import { LifeBookList } from './book-lists/LifeBookList';

export const LifeBooks = () => (
  <>
    <BookGroup bookSlides={LifeBookList} title="Tech Life Books " subTitle="" />
  </>
);
