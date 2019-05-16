import React from 'react';
import PropTypes from 'prop-types';

function Icon({ text, ...options }) {
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

Icon.propTypes = {
  text: PropTypes.string,
};

Icon.defaultProps = {
  text: null,
};

export default Icon;
