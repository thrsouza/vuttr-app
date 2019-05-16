import React, { useState } from 'react';

import Button from '../../shared/Button';
import Icon from '../../shared/Icon';
import Modal from '../../shared/Modal';

import * as Styled from './styles';

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
        <Styled.Form onSubmit={handleSubmit}>
          <Styled.Label>Tool Name *</Styled.Label>
          <Styled.Input name="title" placeholder="Enter with title" />

          <Styled.Label>Tool Link *</Styled.Label>
          <Styled.Input name="link" placeholder="Enter with link" />

          <Styled.Label>Tool Description *</Styled.Label>
          <Styled.Textarea name="description" placeholder="Enter with description" />

          <Styled.Label>Tags *</Styled.Label>
          <Styled.Input name="tags" placeholder="Enter with tags" />

          <Styled.Footer>
            <Button type="submit">Add tool</Button>
          </Styled.Footer>
        </Styled.Form>
      </Modal>
    </>
  );
}

export default ToolAdd;
