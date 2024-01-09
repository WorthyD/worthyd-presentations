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
    <div>
      {/* {book.thumb && <img src={getImageUrl(book.thumb)}  />} */}
      <h3>{book.title}</h3>
      {book.desc && <h6>{book.desc}</h6>}
      <div>
        <span>{book.author}</span> | <span>{book.publishYear}</span>
      </div>
    </div>
  );
};
