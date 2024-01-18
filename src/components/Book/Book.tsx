import './book.scss';
export interface BookItem {
  title: string;
  desc?: string;
  author?: string;
  publishYear?: string;
  thumb?: string;
  amazon?: string;
  audible?: string;
}
export interface BookProps {
  book: BookItem;
  isFragment?: boolean;
}

export const Book = ({ book, isFragment }: BookProps) => {
  function getImageUrl(name) {
    return new URL(`/src/assets/books/${name}`, import.meta.url).href;
  }

  return (
    <div className={`book-item ${isFragment ? 'fragment' : ''}`}>
      <div className="book-item__thumb">{book.thumb && <img src={getImageUrl(book.thumb)} />}</div>
      <div className="book-item__info">
        <div className="book-item__meta">
          <h5>{book.title}</h5>
          {book.desc && <h6>{book.desc}</h6>}
          <div className="book-item__author-info">
            <span>{book.author}</span>
            {book.author && book.publishYear && <span> | </span>}

            <span>{book.publishYear}</span>
          </div>
        </div>
        <div className="book-item__book-links">
          {book.amazon && (
            <a href={book.amazon} target="_blank">
              Book
            </a>
          )}
          {book.audible && (
            <a href={book.audible} target="_blank">
              Audio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
