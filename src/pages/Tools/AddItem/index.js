import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import Button from '../../../components/Button';
import FontIcon from '../../../components/FontIcon';
import Modal from '../../../components/Modal';
import TagInput from '../../../components/TagInput';

import * as Styled from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Tool Name is required'),
  link: Yup.string().url('Tool Link must be a valid URL'),
  description: Yup.string().required('Tool Description is required'),
  tags: Yup.array().required('Tags is required'),
});

function AddItem({ handleAddItem }) {
  const [modalState, setModalState] = useState({ isOpen: false });

  function handleOpenModal() {
    setModalState({ isOpen: true });
  }

  function handleCloseModal() {
    setModalState({ isOpen: false });
  }

  function handleSubmit(data) {
    const {
      title, link, description, tags,
    } = data;

    handleAddItem(title, link, description, tags);
    setModalState({ isOpen: false });
  }

  return (
    <>
      <Button type="button" onClick={handleOpenModal}>
        <FontIcon className="fas fa-plus" text="Add" />
      </Button>
      <Modal isOpen={modalState.isOpen} onRequestClose={handleCloseModal}>
        <h4>
          <FontIcon className="fas fa-plus" text="Add new tool" />
        </h4>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Styled.Container>
            <Styled.Label>Tool Name *</Styled.Label>
            <Styled.Input name="title" placeholder="Enter with title" />

            <Styled.Label>Tool Link</Styled.Label>
            <Styled.Input name="link" placeholder="Enter with link" />

            <Styled.Label>Tool Description *</Styled.Label>
            <Styled.Textarea name="description" placeholder="Enter with description" />

            <Styled.Label>Tags *</Styled.Label>
            <TagInput name="tags" placeholder="Enter with a new tag" />

            <Styled.Footer>
              <Button type="submit">Add tool</Button>
            </Styled.Footer>
          </Styled.Container>
        </Form>
      </Modal>
    </>
  );
}

AddItem.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
};

export default AddItem;
