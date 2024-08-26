import { Note } from '~/components/Notes';
import { Slide } from '../../../components/Slide';
export const Outro = () => {
  function getImageUrl(name) {
    return new URL(`/src/assets/books/${name}`, import.meta.url).href;
  }

  return (
    <>
      <Slide>
        <h2>Questions?</h2>
      </Slide>
      <Slide>
        <h2>Book Recommendation</h2>
        <img src={getImageUrl('beuseful.jpg')} />
        <h3>Be Useful: Seven Tools for Life</h3>
        <Note>
          stages of life: Body builder, actor, public servant, author <br />
          talks about learning a role and how to best work with others <br />
          Do not attach your value of a human being by how useful you are</Note>
      </Slide>
      <Slide>
        <h2>Contact</h2>
        <h3>[Teams Link Here]</h3>
        <h2>Links</h2>
        <h3><a href="https://revealjs.com/" target="_blank">Reveal.js</a></h3>
        <h3><a href="https://angular.dev/guide/di/dependency-injection" target="_blank">Understanding dependency injection</a></h3>

      </Slide>
      <Slide>
        Thank you.
      </Slide>
    </>
  );
};
