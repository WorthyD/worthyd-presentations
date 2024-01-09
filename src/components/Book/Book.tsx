export interface BookItem {
  title: string;
  desc?: string;
  thumb?: string;
  amazon?: string;
  audible?: string;
}
export interface BookProps {
  book: BookItem;
}

export const Book = ({ book }: BookProps) => {
  return <div>{book.title}</div>;
};
