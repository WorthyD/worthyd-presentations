import React from 'react';
import PropTypes from 'prop-types';
import { BaseSyntaxHighlight } from './BaseSyntaxHighlight';

interface TSXProps {
    code: string;
}
export const TSX = ({ code }: TSXProps) => <BaseSyntaxHighlight language="tsx" code={code} />;

