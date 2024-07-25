import { ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
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
  startOnLoad: true,
});
const LayoutDeck = ({ options, children }: LayoutDeckProps) => {
  let params = useParams();

  useEffect(() => {
    Reveal.initialize({
      ...revealOptions,
      ...options,
      //width: 1200,
      //height: 700,
      keyboard: {
        27: () => {},
        // 74:() => {},
        // 76:() => {},
        // 73:() => {}
      },
    }).then(() => {
      Reveal.removeKeyBinding(27);
    });
    mermaid.contentLoaded();

 
  }, []);

  useMemo(() => {
    const t =
      themes.find((x) => x === params?.theme?.toString()?.toLowerCase()) ??
      'default';
    if (t) {
      document.documentElement.classList.add(`theme-${t}`);
    }
  }, [params.theme]);

  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
};

export default LayoutDeck;
