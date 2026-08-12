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
          <li className="fragment">Do web request things</li>
        </ul>
        <Note>
          <ul>
         </ul>
        </Note>
      </Slide>
     <Slide>
        <h2>Questions?</h2>
      </Slide>
      <Slide>
        <h2>Book Recommendation</h2>
        <h3>Mindset: The New Psychology of Success</h3>
        <img src={getImageBookUrl('mindset.jpg')} />
        <Note>
          <ul>
            <li>122 pages / 3 hour audio book</li>
            <li>Refactor has evolved</li>
            <li>Tidying is small</li>
            <li>Immediate vs. Delayed Benefit</li>
          </ul>
        </Note>
      </Slide>
      {/* <Slide>
        <h3>Contact</h3>
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
          <a href="https://nx.dev/blog/mastering-the-project-boundaries-in-nx" target="_blank">
            Mastering Project Boundaries in Nx
          </a>
        </h4>
        <h4>
          <a href="https://nx.dev/technologies/eslint/eslint-plugin/recipes/enforce-module-boundaries" target="_blank">
            Enforce module boundaries rule
          </a>
        </h4>

        <h4>
          <a href="https://go.nx.dev/angular-patterns-ebook" target="_blank">
            Enterprise Monorepo Angular Patterns
          </a>
        </h4>
      </Slide> */}
      <Slide>Go Away.</Slide>
    </>
  );
};
