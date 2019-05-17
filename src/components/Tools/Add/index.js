import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import Button from '../../shared/Button';
import Icon from '../../shared/Icon';
import Modal from '../../shared/Modal';

import * as Styled from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Tool Name is required'),
  link: Yup.string().url('Tool Link must be a valid URL'),
  description: Yup.string().required('Tool Description is required'),
  tags: Yup.string().required('Tags is required'),
});

function ToolAdd() {
  const [modalState, setModalState] = useState({ isOpen: false });

  function handleOpenModal() {
    setModalState({ isOpen: true });
  }

  function handleCloseModal() {
    setModalState({ isOpen: false });
  }

  function handleSubmit() {
    // console.log(data);
    setModalState({ isOpen: false });
  }

  return (
    <>
      <Button type="button" onClick={handleOpenModal}>
        <Icon className="fas fa-plus" text="Add" />
      </Button>
      <Modal isOpen={modalState.isOpen} onRequestClose={handleCloseModal}>
        <h4>
          <Icon className="fas fa-plus" text="Add new tool" />
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
            <Styled.Input name="tags" placeholder="Enter with tags" />

            <Styled.Footer>
              <Button type="submit">Add tool</Button>
            </Styled.Footer>
          </Styled.Container>
        </Form>
      </Modal>
    </>
  );
}

export default ToolAdd;
