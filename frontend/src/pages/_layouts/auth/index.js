import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

/**
 * Auth Layout
 * @param {Element} children
 */
export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
