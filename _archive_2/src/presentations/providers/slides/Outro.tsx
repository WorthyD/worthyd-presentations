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
          Do not attach your value of a human being by how useful you are
        </Note>
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
          <a href="https://angular.dev/guide/di/dependency-injection" target="_blank">
            Understanding dependency injection
          </a>
        </h4>
      </Slide>
      <Slide>Thank you.</Slide>
    </>
  );
};
