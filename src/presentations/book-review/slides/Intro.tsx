import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
export const Intro = () => {
  function getImageUrl(name) {
    return new URL(`/src/assets/books/${name}`, import.meta.url).href;
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
          <li className="fragment">Process Books</li>
          <li className="fragment">Team/Lifestyle Books</li>
          <li className="fragment">'Fun' Reads</li>
        </ul>
        <Note>
          <ul>
            <li>'Essential' Dev Books</li>
            <li> Books for developer career path. Mastery or leadership</li>
            <li>More general books on the software development lifecycle</li>
            <li>Softskills books</li>
            <li>Video Games</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2>My Biases</h2>
        <Note>
          <ul>
            <li>16 years in the industry. Non traditional entry</li>
            <li>Companies of 8 to 200-ish people. One crammed into a 6K.</li>
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
            <li className="fragment">Online documentation was terrible</li>
            <li className="fragment">
              Stack Overflow wasn't a thing until Sept 2008
            </li>
            <li className="fragment">
              Community hadn't embraced open source or knowledge sharing (at
              least in the ASP.NET world)
            </li>
            <li className="fragment">
              Coding books you owned were most likely from college/highschool
            </li>
          </ul>
          <Note>C++ for you++</Note>
        </Slide>
        <Slide>
          <img src={getImageUrl('book.png')} />
          <Note>I did pay the $65 for the book</Note>
        </Slide>
        <Slide>
          <img src={getImageUrl('bookuse.png')} />
          <Note>
            Pretty discouraged from investing in tech literature after this.
          </Note>
        </Slide>
      </Slide>
      <Slide>
        <h2>Why should we be reading books?</h2>
        <ul>
          <li className="fragment">Keep our existing tools sharp</li>
          <li className="fragment">Broaden our skill sets with minimal risk</li>
          <li className="fragment">Provide new perspectives</li>
          <li className="fragment">Motivational</li>
        </ul>
        <Note>
          <ul>
            <li>
              web Articles are great the get lost in book marks sometimes lack
              the depth we really need{' '}
            </li>
            <li>Rusty on devops concepts?</li>
            <li>Not Yolo-ing microservices to production</li>
            <li>New perspectives on tooling and techniques</li>
            <li>
              Personally I've done my most impactful decision making after
              reading some of these books
            </li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2>Guess What?</h2>
        <h4 className="fragment">I don't enjoy reading. It's hard.</h4>
        <h4 className="fragment">I listen to almost all my books....</h4>
        <h4 className="fragment">at 1.75 speed.</h4>
        <Note>
          <ul>
            <li>Listen doing chores</li>
            <li>Listen in car rider line</li>
            <li>D2 Strikes</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h3>
          Invest in an <br />
          Audible subscription
        </h3>
        <Note>
          <ul>
            <li>$15 a month</li>
            <li>Some physical books are $50</li>
            <li>Some books are only $8 with a subscription</li>
            <li>Some books are free with subscription</li>
            <li>PDFs</li>
          </ul>
        </Note>
      </Slide>
    </>
  );
};
