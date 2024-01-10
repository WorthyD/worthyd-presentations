import { Book } from '~/components/Book';
import { Slide } from '../../../components/Slide';
import { BookSlide } from './components/BookSlide';
import { Note } from '~/components/Notes';
export const Fun = () => (
  <>
    <Slide>
      <Book
        book={{
          title:
            'The Expurgation of Maniac Mansion for the Nintendo Entertainment System',
          amazon: 'https://www.crockford.com/maniac.html',
          thumb: 'mmansion.jpg',
        }}
      ></Book>
    </Slide>
    <Slide>
      <h3>That Douglas Crockford</h3>
    </Slide>

    <Slide>
      <Book
        book={{
          title: 'Blood, Sweat and Pixels',
          desc: `The Triumphant, Turbulent Stories Behind How Video Games Are Made`,
          thumb: 'bsp.jpg',
          author: `Jason Schreier`,
          amazon: `https://www.amazon.com/Blood-Sweat-Pixels-Triumphant-Turbulent/dp/0062651234`,
          audible: `https://www.amazon.com/Blood-Sweat-and-Pixels-audiobook/dp/B0731MCF1R`,
          publishYear: `2017`,
        }}
      ></Book>
      <Book
        book={{
          title: 'Press Reset',
          desc: `Ruin and Recovery in the Video Game Industry`,
          thumb: 'pr.jpg',
          author: `Jason Schreier`,
          amazon: `https://www.amazon.com/Press-Reset-Recovery-Video-Industry-ebook/dp/B08HLR61MG`,
          audible: `https://www.amazon.com/Press-Reset-Recovery-Video-Industry/dp/B08NTTVPJS`,
          publishYear: `2021`,
        }}
      ></Book>
    </Slide>
    <Slide>
      <h2>Boss Fight Books</h2>
    </Slide>
    <Slide>
      <Book
        book={{
          title: 'Masters of Doom',
          desc: `How Two Guys Created an Empire and Transformed Pop Culture`,
          thumb: 'mod.jpg',
          author: `David Kishner`,
          amazon: `https://www.amazon.com/Masters-Doom-Created-Transformed-Culture/dp/0812972155`,
          audible: `https://www.amazon.com/Masters-of-Doom-David-Kushner-audiobook/dp/B008KGXM6A`,
          publishYear: `2004`,
        }}
      ></Book>
      <Book
        book={{
          title: 'Doom Guy',
          desc: `Life in First Person`,
          thumb: 'dg.jpg',
          author: `John Romero`,
          amazon: `https://www.amazon.com/Doom-Guy-Life-First-Person/dp/141975811X`,
          audible: `https://www.amazon.com/Doom-Guy-Life-First-Person/dp/B0C47N4ZWB`,
          publishYear: `2023`,
        }}
      ></Book>
    </Slide>
  </>
);
