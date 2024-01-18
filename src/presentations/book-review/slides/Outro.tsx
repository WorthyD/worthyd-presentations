import { Slide } from '../../../components/Slide';
export const Outro = () => (
  <>
    <Slide>
      <h3>Where can I find more books?</h3>
      <ul>
        <li className="fragment">Agile Manifesto authors</li>
        <li className="fragment">Humble Bundle Books</li>
        <li className="fragment">
          <a
            href="https://ebookfoundation.github.io/free-programming-books-search/"
            target="_blank"
          >
            Free Programming Books
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
  </>
);
