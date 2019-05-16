import React from 'react';
import PropTypes from 'prop-types';

import ToolDelete from '../../Delete';

import {
  Container, Title, TitleLink, Description, Tags,
} from './styles';

function ToolListItem({ item, handleDelete }) {
  function renderTitle() {
    if (item.link) {
      return (
        <TitleLink href={item.link || '#'} target={item.link ? '__blank' : null}>
          {item.title}
        </TitleLink>
      );
    }
    return <Title>{item.title}</Title>;
  }

  return (
    <Container>
      {renderTitle()}
      <Description>{item.description}</Description>
      <Tags>
        {item.tags.map(tag => (
          <li key={tag}>{`#${tag}`}</li>
        ))}
      </Tags>
      <ToolDelete item={item} handleDelete={handleDelete} />
    </Container>
  );
}

ToolListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ToolListItem;
