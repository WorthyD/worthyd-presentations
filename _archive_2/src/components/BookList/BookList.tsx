import { BookItem, Book } from '../Book';
import './book-list.scss';
export interface BookListProps {
  baseKey: string;
  books: BookItem[];
}

export const BookList = ({ books, baseKey }: BookListProps) => {
  return (
    <div className={books.length > 3 ? 'book-list' : 'book-items'}>
      {books.map((b, i) => (
        <Book book={b} isFragment={i > 0} key={`book_${baseKey}_${i}`}></Book>
      ))}
    </div>
  );
};
