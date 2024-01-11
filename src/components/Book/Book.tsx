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
}

export const Book = ({ book }: BookProps) => {
  function getImageUrl(name) {
    return new URL(`/src/assets/books/${name}`, import.meta.url).href;
  }

  return (
    <div className="book-item">
      <div>{book.thumb && <img src={getImageUrl(book.thumb)} />}</div>
      <div className="book-item_info">
        <h3>{book.title}</h3>
        {book.desc && <h6>{book.desc}</h6>}
        <div className="book-item__author-info">
          <span>{book.author}</span> | <span>{book.publishYear}</span>
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
