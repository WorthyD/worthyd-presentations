import LayoutDeck from '../../layouts/LayoutDeck';
import BookReviewSlides from './slides';

const UILibraries = () => {
  return (
    <>
      <LayoutDeck>{BookReviewSlides}</LayoutDeck>
    </>
  );
};

export default UILibraries;
