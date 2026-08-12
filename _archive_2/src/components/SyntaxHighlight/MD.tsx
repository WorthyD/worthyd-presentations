import { BaseSyntaxHighlight } from './BaseSyntaxHighlight';

interface JSXProps {
    code: string;
}
export const MD = ({ code }: JSXProps) => <BaseSyntaxHighlight language="markdown" code={code} />;

