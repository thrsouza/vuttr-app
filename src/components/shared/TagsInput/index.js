import React, { useState, useEffect, useRef } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
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

function TagsInput({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [tagsState, setTagsState] = useState([]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'tags',
      parseValue: () => tagsState,
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
        <ReactTags
          tags={tagsState}
          name={name}
          placeholder={placeholder}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleInputBlur={() => {}}
          delimiters={delimiters}
          allowDragDrop={false}
          ref={ref}
          inputFieldPosition="top"
        />
      </Container>
      {error && <span>{error}</span>}
    </>
  );
}

TagsInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

TagsInput.defaultProps = {
  placeholder: null,
};

export default TagsInput;
