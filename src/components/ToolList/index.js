import React from 'react';
import ToolListItem from '../ToolListItem';

import { Container } from './styles';

// eslint-disable-next-line react/prop-types
function ToolList({ items }) {
  return (
    <Container>
      {items.map(item => (
        <ToolListItem key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default ToolList;
