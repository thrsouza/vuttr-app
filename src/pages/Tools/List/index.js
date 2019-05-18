import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../ListItem';

import * as Styled from './styles';

function List({ data, handleToolListItemDelete }) {
  function renderData() {
    if (data) {
      return data.map(item => (
        <ListItem key={item.id} item={item} handleDelete={handleToolListItemDelete} />
      ));
    }
    return (
      <Styled.EmptyContainer>
        <Styled.Icon className="fas fa-circle-notch fa-spin" />
      </Styled.EmptyContainer>
    );
  }

  return <Styled.Container>{renderData()}</Styled.Container>;
}

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      description: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
    }),
  ),
  handleToolListItemDelete: PropTypes.func.isRequired,
};

List.defaultProps = {
  data: null,
};

export default List;
