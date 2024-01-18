import { BookItem } from '~/components/Book';
import { BookSlide } from './BookSlide';
import { Slide } from '~/components/Slide';
export interface BookGroupInfo {
  title: string;
  books: BookItem[];
  notes: string;
}
interface BookGroupProps {
  title: string;
  subTitle: string;
  bookSlides: BookGroupInfo[];
}

export const BookGroup = ({ bookSlides, title, subTitle }: BookGroupProps) => (
  <>
    <Slide>
      <Slide>
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </Slide>
      {bookSlides.map((bs, i) => (
        <BookSlide
          title={bs.title}
          books={bs.books}
          notes={bs.notes}
          key={`bookslide_${bs.title}_${i}`}
        />
      ))}
    </Slide>
  </>
);
