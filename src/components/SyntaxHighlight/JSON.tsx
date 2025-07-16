import React from 'react';
import PropTypes from 'prop-types';
import { BaseSyntaxHighlight } from './BaseSyntaxHighlight';

interface TSXProps {
    code: string;
}
export const JSON = ({ code }: TSXProps) => <BaseSyntaxHighlight language="json" code={code} />;

