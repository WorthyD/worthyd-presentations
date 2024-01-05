import LayoutDeck from '../../layouts/LayoutDeck';
import UILibSlides from './slides';
import '../../themes/rev-unit.scss';

const UILibraries = () => {
    return (
        <>
            <LayoutDeck>
                {UILibSlides}
            </LayoutDeck>
            <div className="rev-unit-logo">
                <div className="rev-unit-logo__bg"></div>
                <img src="/revunit-logo-white.png" />
            </div>
        </>

    )
}

export default UILibraries;