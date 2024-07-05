import LayoutDeck from '../../layouts/LayoutDeck';
import UILibSlides from './slides';

const UILibraries = () => {
  import('../../themes/rev-unit.scss');
  return (
    <>
      <LayoutDeck>{UILibSlides}</LayoutDeck>
      <div className="rev-unit-logo">
        <div className="rev-unit-logo__bg"></div>
        <img src="/revunit-logo-white.png" />
      </div>
    </>
  );
};

export default UILibraries;
