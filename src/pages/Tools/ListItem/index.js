import React from 'react';
import PropTypes from 'prop-types';

import DeleteItem from '../DeleteItem';

import {
  Container, Title, TitleLink, Description, Tags,
} from './styles';

function ListItem({ item, handleDelete }) {
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
      <DeleteItem item={item} handleDelete={handleDelete} />
    </Container>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ListItem;
