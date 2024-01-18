import { ReactNode } from "react";

interface SlideProps {
    children: ReactNode;
    transition?: string;
}
export const Slide = ({ children, transition = 'slide' }: SlideProps) => (
    <section data-transition={transition}>{children}</section>
);

