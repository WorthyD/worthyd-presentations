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
        <Note>Do not attach your value of a human being by how useful you are</Note>
      </Slide>
    </>
  );
};
