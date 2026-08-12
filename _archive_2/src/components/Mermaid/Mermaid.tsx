import React, { ReactNode } from 'react';

interface MermaidProps {
  chart: string;
}

export const Mermaid = ({ chart }: MermaidProps) => (
  <div className="mermaid" >
    {chart}
  </div>
);
