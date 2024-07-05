import { ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import revealOptions from '../constants/RevealOptions';
import { useParams } from 'react-router-dom';

interface LayoutDeckProps {
  options?: any;
  children: ReactNode;
}
const themes = ['skillup', 'jbh'];

const LayoutDeck = ({ options, children }: LayoutDeckProps) => {
  let params = useParams();

  useEffect(() => {
    Reveal.initialize({ ...revealOptions, ...options });
  }, []);

  useMemo(() => {
    const t =
      themes.find((x) => x === params?.theme?.toString()?.toLowerCase()) ??
      'default';
    if (t) {
      document.body.classList.add(`theme-${t}`);
    }
  }, [params.theme]);

  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
};

export default LayoutDeck;
