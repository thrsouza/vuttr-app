import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ButtonDelete from '../../../components/Button/Delete';
import FontIcon from '../../../components/FontIcon';
import Modal from '../../../components/Modal';

import * as Styled from './styles';

function DeleteItem({ item, handleDelete }) {
  const [modalState, setModalState] = useState({ isOpen: false });

  const handleOpenModal = () => {
    setModalState({ isOpen: true });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false });
  };

  const handleRemoveItem = () => {
    handleDelete(item.id);
    setModalState({ isOpen: false });
  };

  return (
    <>
      <ButtonDelete onClick={handleOpenModal} />
      <Modal isOpen={modalState.isOpen} onRequestClose={handleCloseModal}>
        <h4>
          <FontIcon className="fas fa-plus" text="Remove tool" />
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

DeleteItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DeleteItem;
