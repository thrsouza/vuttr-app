import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ButtonDelete from '../../shared/Button/Delete';
import Icon from '../../shared/Icon';
import Modal from '../../shared/Modal';

import * as Styled from './styles';

function ToolDelete({ item }) {
  const [modalState, setModalState] = useState({ isOpen: false });

  function handleOpenModal() {
    setModalState({ isOpen: true });
  }

  function handleCloseModal() {
    setModalState({ isOpen: false });
  }

  function handleRemoveItem() {
    setModalState({ isOpen: false });
  }

  return (
    <>
      <ButtonDelete onClick={handleOpenModal} />
      <Modal isOpen={modalState.isOpen} onRequestClose={handleCloseModal}>
        <h4>
          <Icon className="fas fa-plus" text="Remove tool" />
        </h4>
        <Styled.Container>
          <Styled.Text>
            {'Are you sure you want to remove '}
            <b>{item.title}</b>
            {'?'}
          </Styled.Text>
          <Styled.Footer>
            <Styled.ButtonContainer>
              <Styled.CancelButton onClick={handleCloseModal}>Cancel</Styled.CancelButton>
              <Styled.RemoveButton onClick={handleRemoveItem}>Yes, remove</Styled.RemoveButton>
            </Styled.ButtonContainer>
          </Styled.Footer>
        </Styled.Container>
      </Modal>
    </>
  );
}

ToolDelete.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ToolDelete;
