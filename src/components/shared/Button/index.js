import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

function ButtonDefault({ children, loading, ...options }) {
  return (
    <Styled.Button {...options}>
      {loading ? <i className="fas fa-circle-notch fa-spin" /> : children}
    </Styled.Button>
  );
}

ButtonDefault.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool,
};

ButtonDefault.defaultProps = {
  children: null,
  loading: false,
};

export default ButtonDefault;
