import React from 'react';
import PropTypes from 'prop-types';

import ToolListItem from './Item';

import * as Styled from './styles';

function ToolList({ data }) {
  function renderData() {
    if (data) {
      return data.map(item => <ToolListItem key={item.id} item={item} />);
    }
    return <Styled.Icon className="fas fa-circle-notch fa-spin" />;
  }

  return (
    <Styled.EmptyContainer>
      <Styled.Container>{renderData()}</Styled.Container>
    </Styled.EmptyContainer>
  );
}

ToolList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
    }),
  ).isRequired,
};

export default ToolList;
