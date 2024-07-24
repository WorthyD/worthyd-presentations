import { Highlight, themes, Language } from 'prism-react-renderer';

interface BaseSyntaxHighlightProps {
  code?: string;
  language: Language;
}

export const BaseSyntaxHighlight = ({
  code = '',
  language,
}: BaseSyntaxHighlightProps) => (
  <Highlight language={language} code={code} theme={themes.nightOwl}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            {/* <span>{i + 1}</span> */}
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);
