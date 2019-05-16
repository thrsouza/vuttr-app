import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function SearchBox({ value, onChange }) {
  const [valueState, setValueState] = useState(value);

  function handleChange({ target }) {
    setValueState(target.value);
    onChange(target.value);
  }

  return (
    <Container>
      <i className="fas fa-search" />
      <input
        type="text"
        id="search"
        name="search"
        placeholder="search"
        value={valueState}
        onChange={handleChange}
      />
    </Container>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SearchBox.defaultProps = {
  value: null,
  onChange: () => {},
};

export default SearchBox;
