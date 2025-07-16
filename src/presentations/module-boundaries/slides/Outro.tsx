import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
import { JSON } from '~/components/SyntaxHighlight';
export const Outro = () => {
  function getImageUrl(name) {
    return new URL(`/src/assets/gifs/${name}`, import.meta.url).href;
  }
  function getImageBookUrl(name) {
    return new URL(`/src/assets/books/${name}`, import.meta.url).href;
  }
  return (
    <>
      <Slide>
        <h2>Review</h2>
        <ul>
          <li className="fragment">Module boundaries help us get and stay organized</li>
          <li className="fragment">Help new developers find what they are looking for </li>
          <li className="fragment">Ultimately defined and modified by the team</li>
          <li className="fragment">Gradually implemented</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Remember</h2>
        <img src={getImageUrl('guidelines.gif')} />
        <Note>
          These are supposed to help the team. <br />
          if they don't work for your team, collaborate and find a pattern that will work.
          <br />
          These aren't a silver bullet, but they can help you get started.
        </Note>
      </Slide>
      <Slide>
        <h2>Questions</h2>
      </Slide>
      <Slide>
        <h2>Further Reading</h2>
        <h3>Enterprise Monorepo Angular Patterns</h3>
        <h4>by the Nx Core Team</h4>
        <a href="https://go.nx.dev/angular-patterns-ebook" target="_blank">
          https://go.nx.dev/angular-patterns-ebook
        </a>
      </Slide>
      <Slide>
        <h2>Book Recommendation</h2>
        <h3>Tidy First</h3>
        <img src={getImageBookUrl('tidy2.jpg')} />
        <Note></Note>
      </Slide>
      <Slide>
        <h3>Contact</h3>
        {/* <a href="sip:daniel.j.worthy@jbhunt.com">[Teams Link Here]</a> */}
        <img src="https://gravatar.com/avatar/0a4529b934a763d95f57b3c56284d6ef?size=125" style={{ borderRadius: '50%' }} />
        <h4>
          <a href="https://teams.microsoft.com/l/chat/0/0?users=daniel.j.worthy@jbhunt.com" target="_blank">
            Find me on Teams
          </a>
        </h4>
        <h3>Links</h3>
        <h4>
          Presentation Framework -
          <a href="https://revealjs.com/" target="_blank">
            Reveal.js
          </a>
        </h4>
        <h4>
          <a href="https://github.com/WorthyD/worthyd-presentations/" target="_blank">
            Presentation Source
          </a>
        </h4>
        <h4>
          <a href="https://go.nx.dev/angular-patterns-ebook" target="_blank">
            Enterprise Monorepo Angular Patterns
          </a>
        </h4>
      </Slide>
      <Slide>Thank you.</Slide>
    </>
  );
};
