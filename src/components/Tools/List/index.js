import React from 'react';
import PropTypes from 'prop-types';

import ToolListItem from './Item';

import * as Styled from './styles';

function ToolList({ data, handleToolListItemDelete }) {
  function renderData() {
    if (data) {
      return data.map(item => (
        <ToolListItem key={item.id} item={item} handleDelete={handleToolListItemDelete} />
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

ToolList.propTypes = {
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

ToolList.defaultProps = {
  data: null,
};

export default ToolList;
