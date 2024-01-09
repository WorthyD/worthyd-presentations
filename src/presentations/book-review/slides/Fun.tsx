import { Book } from '~/components/Book';
import { Slide } from '../../../components/Slide';
import { BookSlide } from './components/BookSlide';
export const Fun = () => (
  <>
    <Slide>
      <Book
        book={{
          title:
            'The Expurgation of Maniac Mansion for the Nintendo Entertainment System',
        }}
      ></Book>
    </Slide>
    <Slide>
      <h3>That Douglas Crockford</h3>
    </Slide>

    <Slide>
      <h2>Boss Fight Books</h2>
    </Slide>
    <Slide>
      <Book
        book={{
          title: 'Masters of Doom',
        }}
      ></Book>
      <Book
        book={{
          title: 'Doom Guy',
        }}
      ></Book>
    </Slide>
  </>
);
