import React, { ReactNode } from 'react';
interface NoteProps {
    children: ReactNode;
}
export const Note = ({ children }: NoteProps) => <aside className="notes">{children}</aside>;

