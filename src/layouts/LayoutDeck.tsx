
import { ReactElement, ReactNode, useEffect } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import revealOptions from '../constants/RevealOptions';

interface LayoutDeckProps {
    options?: any;
    children: ReactNode;
}

const LayoutDeck = ({ options, children }: LayoutDeckProps) => {
    useEffect(() => {
        Reveal.initialize({ ...revealOptions, ...options });
    });
    return (
        <div className="reveal">
            <div className="slides">{children}</div>
        </div>
    );
};

export default LayoutDeck;