import { Slide } from '../../../../components/Slide';
import { BookList, BookListProps } from '../../../../components/BookList';
import { BookItem } from '../../../../components/Book';
import { Note } from '~/components/Notes';
1;
interface BookSlideProps {
  title: string;
  books: BookItem[];
  notes: string;
}

export const BookSlide = ({ title, books, notes }: BookSlideProps) => (
  <>
    <Slide>
      <h2>{title}</h2>
      <BookList books={books} baseKey={encodeURIComponent(title)} />
      <Note><pre>{notes}</pre></Note>
    </Slide>
  </>
);
