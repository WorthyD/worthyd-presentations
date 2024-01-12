import { Book } from '~/components/Book';
import { Slide } from '../../../components/Slide';
import { BookSlide } from './components/BookSlide';
import { Note } from '~/components/Notes';
export const Fun = () => {
  function getImageUrl(name) {
    return new URL(`/src/assets/books/${name}`, import.meta.url).href;
  }
  return (
    <>
      <Slide>
        <Slide>
          <Book
            book={{
              title:
                'The Expurgation of Maniac Mansion for the Nintendo Entertainment System',
              amazon: 'https://www.crockford.com/maniac.html',
              thumb: 'mmaniac.png',
              author: 'Douglas Crockford',
            }}
          ></Book>
          <Note>
            <p>LucasArts Entertainment, edits to maniac mansion </p>
            <p>
            Script Creation Utility for Maniac Mansion = scumm
            didn't object to being able to put a hamster in the microwave
            </p>
          </Note>
        </Slide>
        <Slide>
          <h3>That Douglas Crockford</h3>
          <img src={getImageUrl('crockford.png')} />
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
            isFragment={true}
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
          <Note>
            <p>BSP - Destiny, Witcher 3, Shovel Knight and Startdew Value</p>
            <p>RP - Volatility of industry</p>
          </Note>
        </Slide>
        <Slide>
          <Book
            book={{
              title: 'Boss Fight Books',
              desc: `33 books on classic video game development`,
              thumb: 'ctrigger.jpg',
              author: ``,
              amazon: `https://bossfightbooks.com/`,
              audible: ``,
              publishYear: `2014 - Present`,
            }}
          ></Book>
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
            isFragment={true}
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
          <Note>
            <pre>
              Creation of Comander Keen - Wolf - Doom - Quake <br /> Attempt to
              get permission to write SMB 3 on PC - 72 binge. Wolf 3d Doom
              <br />
              Quake - took care of tehir own sofware idstro and people hacked
              their cds to get the key
            </pre>
          </Note>
        </Slide>
      </Slide>
      <Slide>
        <h3>Band of Brothers / Pacific</h3>
        <ul>
          <li className="fragment">Band of Brothers</li>
          <li className="fragment">Beyond Band of Brothers</li>
          <li className="fragment">Parachute Infantry</li>
          <li className="fragment">Brothers in Battle, Best of Friends</li>
          <li className="fragment">Hang Tough</li>
          <li className="fragment">Helmet for My Pillow</li>
          <li className="fragment">Red Blood, Black Sand: from Boot Camp to Iwo Jima</li>
          <li className="fragment">With the Old Breed</li>
        </ul>
        <Note>
          <p>
            David Webster - Parachute<br />
            Babe Heffron and Bill Guarnere<br />
            Red Blood, Black Sand: Fighting Alongside John Basilone from Boot Camp to Iwo Jima
          </p>
        </Note>
      </Slide>
    </>
  );
};
