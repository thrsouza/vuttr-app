import React, { useState, useEffect, useRef } from 'react';
import { WithContext as ReactTagInput } from 'react-tag-input';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { Container } from './styles';

const KeyCodes = {
  COMMA: 188,
  ENTER: 13,
  SPACE: 32,
  TAB: 9,
};

const delimiters = [KeyCodes.COMMA, KeyCodes.ENTER, KeyCodes.SPACE, KeyCodes.TAB];

function TagInput({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [tagsState, setTagsState] = useState([]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'tags',
      parseValue: () => tagsState.map(item => item.text),
    });
  }, [fieldName, tagsState]); // eslint-disable-line

  function handleDelete(i) {
    setTagsState([...tagsState.filter((_, index) => index !== i)]);
  }

  function handleAddition(tag) {
    setTagsState([...tagsState, tag]);
  }

  return (
    <>
      <Container>
        <ReactTagInput
          tags={tagsState}
          name={name}
          placeholder={placeholder}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleInputBlur={() => {}}
          delimiters={delimiters}
          allowDragDrop={false}
          allowDeleteFromEmptyInput={false}
          ref={ref}
          inputFieldPosition="top"
        />
      </Container>
      {error && <span>{error}</span>}
    </>
  );
}

TagInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

TagInput.defaultProps = {
  placeholder: null,
};

export default TagInput;
