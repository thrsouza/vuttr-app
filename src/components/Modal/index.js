import React from 'react';
import ReactModal from 'react-modal';

import colors from '../../styles/colors';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.inkTransparent,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 700,
  },
};

ReactModal.setAppElement('#modal');

function Modal({ ...options }) {
  return <ReactModal style={customStyles} {...options} />;
}

export default Modal;
