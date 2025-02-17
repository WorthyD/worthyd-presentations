import { Slide } from '../../../components/Slide';
export const Outro = () => {
  function getImageUrl(name) {
    return new URL(`/src/assets/books/${name}`, import.meta.url).href;
  }
  return (
    <>
      <Slide>
        <h3>Where can I find more books?</h3>
        <ul>
          <li className="fragment">Agile Manifesto authors</li>
          <li className="fragment">Humble Bundle Books</li>
          <li className="fragment">
            <a href="https://ebookfoundation.github.io/free-programming-books-search/" target="_blank">
              https://ebookfoundation.github.io/
            </a>
          </li>
          <li className="fragment">
            <a href="https://www.programmingbooks.dev/" target="_blank">
              ProgrammingBooks.dev
            </a>
          </li>
        </ul>
        {/* Project Management <br />
        Career Building by Career Press
        <br />
        O'Reilly Classics
        <br />
        DevOps by Pact
        <br />
        The Joy of Coding Bundle
        <br />
        Microsoft and .NET by Apress
        <br />
        A.I. by Pact
        <br />
        Be the Boss */}
      </Slide>
      <Slide>
        <h2>Questions?</h2>
      </Slide>
      <Slide>
        <h2>Thank you!</h2>
        <img src={getImageUrl('levar.gif')} />
      </Slide>
    </>
  );
};
