import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function CheckBox({
  id, name, label, checked, onChange,
}) {
  const [checkedState, setCheckedState] = useState(checked);

  function handleChange({ target }) {
    setCheckedState(target.checked);
    onChange(target.checked);
  }

  return (
    <Container>
      <input
        type="checkbox"
        id={id || name}
        name={name}
        checked={checkedState}
        onChange={handleChange}
      />
      {label}
    </Container>
  );
}

CheckBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  id: null,
  checked: false,
  onChange: () => {},
};

export default CheckBox;
