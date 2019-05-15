import React from 'react';

import {
  Container, Link, Description, Tags, RemoveButton,
} from './styles';

// eslint-disable-next-line react/prop-types
function ToolListItem({ item }) {
  return (
    <Container>
      <Link href={item.link} target="__blank">
        {item.title}
      </Link>
      <Description>{item.description}</Description>
      <Tags>
        {item.tags.map(tag => (
          <li>{`#${tag}`}</li>
        ))}
      </Tags>
      <RemoveButton>
        <i className="fas fa-times" />
      </RemoveButton>
    </Container>
  );
}

export default ToolListItem;
