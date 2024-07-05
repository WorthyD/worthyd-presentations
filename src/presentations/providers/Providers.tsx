import LayoutDeck from '../../layouts/LayoutDeck';
import ProviderSlides from './slides';

const Providers = () => {
  import('../../themes/jbh.scss');
  //import('../../themes/rev-unit.scss')
  return (
    <>
      <LayoutDeck>{ProviderSlides}</LayoutDeck>
    </>
  );
};

export default Providers;
