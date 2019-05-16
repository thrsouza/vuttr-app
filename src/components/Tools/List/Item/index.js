import React from 'react';
import PropTypes from 'prop-types';

import ToolDelete from '../../Delete';

import {
  Container, Link, Description, Tags,
} from './styles';

function ToolListItem({ item }) {
  return (
    <Container>
      <Link href={item.link} target="__blank">
        {item.title}
      </Link>
      <Description>{item.description}</Description>
      <Tags>
        {item.tags.map(tag => (
          <li key={tag}>{`#${tag}`}</li>
        ))}
      </Tags>
      <ToolDelete item={item} />
    </Container>
  );
}

ToolListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }).isRequired,
};

export default ToolListItem;
