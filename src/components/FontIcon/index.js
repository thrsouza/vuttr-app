import React from 'react';
import PropTypes from 'prop-types';

function FontIcon({ text, ...options }) {
  if (text) {
    return (
      <>
        <i {...options} />
        {` ${text}`}
      </>
    );
  }

  return <i {...options} />;
}

FontIcon.propTypes = {
  text: PropTypes.string,
};

FontIcon.defaultProps = {
  text: null,
};

export default FontIcon;
