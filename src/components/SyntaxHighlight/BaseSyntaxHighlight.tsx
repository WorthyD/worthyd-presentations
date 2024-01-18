import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

interface BaseSyntaxHighlightProps {
    code?: string;
    language: Language;
}

export const BaseSyntaxHighlight = ({ code = '', language }: BaseSyntaxHighlightProps) => (
    <Highlight {...defaultProps} language={language} code={code} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })} data-line-numbers>
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                ))}
            </pre>
        )}
    </Highlight>
);
