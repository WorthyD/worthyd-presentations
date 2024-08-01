import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  transition?: string;
  otherProps?: any;
}
export const Slide = ({ children, transition = 'slide', ...otherProps }: SlideProps) => (
  <section data-transition={transition} {...otherProps}>
    {children}
  </section>
);
