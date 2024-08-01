import { createContext, ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import '../themes/themes.scss';
import revealOptions from '../constants/RevealOptions';
import { useParams } from 'react-router-dom';
import mermaid from 'mermaid';
interface LayoutDeckProps {
  options?: any;
  children: ReactNode;
}
const themes = ['skillup', 'jbh'];
mermaid.initialize({
  startOnLoad: true
});

export const UserContext = createContext(null);

const LayoutDeck = ({ options, children }: LayoutDeckProps) => {
  let params = useParams();
  let [theme, setTheme] = useState(null);

  useEffect(() => {
    Reveal.initialize({
      ...revealOptions,
      ...options,
      //width: 1200,
      //height: 700,
      keyboard: {
        27: () => {}
        // 74:() => {},
        // 76:() => {},
        // 73:() => {}
      },
      controlsLayout: theme !== 'skillup' ? 'edges' : 'bottom-right',
      viewDistance: 100, // Required for mermaid charts
      center: true
    }).then(() => {
      Reveal.removeKeyBinding(27);
    });
    mermaid.contentLoaded();
  }, []);

  useMemo(() => {
    const t = themes.find((x) => x === params?.theme?.toString()?.toLowerCase()) ?? 'default';
    if (t) {
      document.documentElement.classList.add(`theme-${t}`);
      setTheme(t);
    }
  }, [params.theme]);

  return (
    <UserContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="reveal">
        <div className="slides">
          {children}
          <>
            {theme === 'skillup' && (
              <>
                <div className="skillup-footer">J. B. Hunt Business</div>
                <div className="skill-up-logo">
                  <img src="/skillup.png" />
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default LayoutDeck;
