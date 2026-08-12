import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
export const Intro = () => {
  function getImageUrl(name) {
    return new URL(`/src/assets/books/${name}`, import.meta.url).href;
  }
  return (
    <>
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
            <li>We are going to go fast</li>
            <li>'Essential' Dev Books</li>
            <li>Books for developer career path. Mastery or leadership</li>
            <li>Process Books - More general books on the software development lifecycle</li>
            <li>Team/Lifestyle Books - Softskills books, valuable for devs</li>
            <li>Burn yourself out on 100 hours of programing content</li>
            <li>Programming adjacent books</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2>My Biases</h2>
        <Note>
          <ul>
            <li>16 years in the industry. Non traditional entry</li>
            <li>3 Companies of 8 to 200-ish people. </li>
            <li>Mostly rapid greenfield/ rapid prototype applications</li>
            <li>What may be valuable to me wont be valuable to you</li>
            <li>
              It may have been a few years since I read some of these books and I may not always be able to say everything I liked about
              them
            </li>
            
            <li>Please share useful books in chat. </li>
            <li>I'll share a link to this list later</li>
          </ul>
        </Note>
      </Slide>
      {/* <Slide> */}
      <Slide>
        <h2>Story Time</h2>
        <p>In late 2007, web development was pretty primitive when it came to 'free' resources.</p>
        <ul>
          <li className="fragment">Online documentation was terrible</li>
          <li className="fragment">Stack Overflow wasn't a thing until Sept 2008</li>
          <li className="fragment">Community hadn't embraced open source or knowledge sharing (at least in the ASP.NET world)</li>
          <li className="fragment">Coding books you owned were most likely from college/highschool</li>
        </ul>
        <Note>C++ for you++
          <br />
          Started with .net 2 and was told my next project was going to be in .net 3.5.


        </Note>
      </Slide>
      <Slide>
        <img src={getImageUrl('book.png')} />
        <Note>
          I did pay the $65 for the book.
          <br /> Also was in C# and not VB
        </Note>
      </Slide>
      <Slide>
        <img src={getImageUrl('bookuse.png')} />
        <Note>
          I was really discouraged from buying books after this. <br />
          we didn't use components the same way it taught them <br />
          asp.net datagrid vs gridview vs repeater <br />
          It was expensive and I didn't get much out of it.<br />
          very cautions on buying platform or framework specific books <br />
          buy cheap or used if you must
        </Note>
      </Slide>
      {/* </Slide> */}
      <Slide>
        <h2>Why should we be reading books?</h2>
        <ul>
          <li className="fragment">Short form content only covers so much</li>
          <li className="fragment">Broaden our knowledge base</li>
          <li className="fragment">Provide new perspectives</li>
          <li className="fragment">Motivational</li>
        </ul>
        <Note>
          <ul>
            <li>web Articles are great the get lost in book marks sometimes lack the depth we really need </li>
            <li>Not Yolo-ing microservices to production</li>
            <li>New perspectives on tooling and techniques</li>
            <li>Personally I've done my most impactful work making after reading some of these books</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2>Guess What?</h2>
        <h4 className="fragment">I don't enjoy reading. It's hard.</h4>
        <h4 className="fragment">I listen to almost all my books.</h4>
        <h4 className="fragment">It is significantly more convenient</h4>
        <Note>
          <ul>
            <li>Listen doing chores</li>
            <li>Listen in car rider line</li>
            <li>mowing the lawn</li>
            <li>downside: Listen to the same book twice</li>
            <li>most books around 8 to 12 hours. </li>
            <li>Reference: HP 24, Stormlight Archive 60</li>
            <li>Whittle time down by listening at 1.5 speed</li>
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
            <li>PDFs of example code</li>
            <li>Find what works for you, </li>
            <li>physical, kindle, audio</li>
          </ul>
        </Note>
      </Slide>
    </>
  );
};
