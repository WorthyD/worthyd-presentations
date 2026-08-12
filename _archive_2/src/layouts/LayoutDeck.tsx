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
    console.log('Initializing Reveal.js with options:', options);
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
            {theme === 'jbh' && (
              <>
                <div className="jbh-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" _ngcontent-ng-c39055267="" aria-hidden="true">
                    <g id="Match" _ngcontent-ng-c39055267="">
                      <path
                        d="M14,11a2,2,0,1,0,2,2A2,2,0,0,0,14,11Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,14,14Zm0-8a2,2,0,1,0,2,2A2,2,0,0,0,14,6Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,14,9ZM2,11a2,2,0,1,0,2,2A2,2,0,0,0,2,11Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,2,14ZM2,6A2,2,0,1,0,4,8,2,2,0,0,0,2,6ZM2,9A1,1,0,1,1,3,8,1,1,0,0,1,2,9ZM12.81,4.6A2,2,0,0,0,14,5a2,2,0,1,0-2-2,2,2,0,0,0,.18.82L8.33,7.07a1.06,1.06,0,0,0-.66,0L3.82,3.82A2,2,0,0,0,4,3,2,2,0,1,0,2,5a2,2,0,0,0,1.19-.4L7,7.84A.76.76,0,0,0,7,8a1,1,0,0,0,.3.71A1,1,0,0,0,8,9,1,1,0,0,0,9,8s0-.11,0-.16ZM14,2a1,1,0,1,1-1,1A1,1,0,0,1,14,2ZM1,3A1,1,0,1,1,2,4,1,1,0,0,1,1,3Z"
                        _ngcontent-ng-c39055267=""
                      ></path>
                    </g>
                  </svg>
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
