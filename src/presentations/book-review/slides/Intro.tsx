import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
export const Intro = () => {
  function getImageUrl(name) {
    return new URL(name, import.meta.url).href;
  }
  return (
    <>
      <Slide>
        <h2>Dev Books</h2>
        <p>30+ books you could/shoud/maybe read</p>
        <footer>Jan 2024</footer>
      </Slide>
      <Slide>
        <h2>What we are going to cover</h2>
        <ul>
          <li className="fragment">'Essential' Dev Books</li>
          <li className="fragment">Career Path Books</li>
          <li className="fragment">Team/Lifestyle Books</li>
          <li className="fragment">'Fun' Reads</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Biases</h2>
        <Note>
          <ul>
            <li>Companies of 8 to 200-ish people. One crammed into a 6K.</li>
            <li>16 years in the industry.</li>
            <li>What may be valuable to me wont be valuable to you</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <Slide>
          <h2>Story Time</h2>
          <p>
            In 2007, web development was pretty primitive when it came to 'free'
            resources.
          </p>
          <ul>
            <li>Online documentation was terrible</li>
            <li>Stack Overflow wasn't a thing until Sept 2008</li>
            <li>
              Community hadn't embraced open source or knowledge sharing (at
              least in the ASP.NET world)
            </li>
            <li>Coding books you owned were most likely from college</li>
          </ul>
        </Slide>
        <Slide>
          <img src={getImageUrl('./src/assets/book1.png')} />
        </Slide>
        <Slide>
          <img src={getImageUrl('./src/assets/book1-use.png')} />
        </Slide>
      </Slide>
      <Slide>
        <h2>Why should we be reading?</h2>
        <ul>
          <li className="fragment">Keep our existing tools sharp</li>
          <li className="fragment">Broaden our skill sets with minimal risk</li>
          <li className="fragment">Provide new perspectives</li>
          <li className="fragment">
            Less stressful than learning in production
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>Guess What?</h2>
        <h3 className="fragment">I don't enjoy reading. It's hard.</h3>
        <h3 className="fragment">I listen to almost all my books....</h3>
        <h3 className="fragment">at 1.75 speed.</h3>
      </Slide>
      <Slide>Audible, value, when to listen</Slide>
    </>
  );
};
