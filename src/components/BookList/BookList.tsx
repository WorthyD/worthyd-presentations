import { BookItem, Book } from '../Book';
export interface BookListProps {
  baseKey: string;
  books: BookItem[];
}

export const BookList = ({ books, baseKey }: BookListProps) => (
  <div>
    {books.map((b, i) => (
      <Book book={b} key={`book_${baseKey}_${i}`}></Book>
    ))}
  </div>
);
