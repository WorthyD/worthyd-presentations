import { BaseSyntaxHighlight } from './BaseSyntaxHighlight';

interface JSXProps {
    code: string;
}
export const JSX = ({ code }: JSXProps) => <BaseSyntaxHighlight language="jsx" code={code} />;

