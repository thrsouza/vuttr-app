import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToolsActions from '../../store/ducks/tools';

import CheckBox from '../../components/CheckBox';
import SearchBox from '../../components/SearchBox';

import AddItem from './AddItem';
import ListItem from './ListItem';

import * as Styled from './styles';

function ToolsPage({
  tools, getToolsRequest, addToolRequest, deleteToolRequest,
}) {
  const [state, setState] = useState({ searchText: null, searchTagOnly: true });

  useEffect(() => {
    getToolsRequest(state.searchText, state.searchTagOnly);
  }, [state, getToolsRequest]);

  function handleSearchBox(value) {
    setState({ ...state, searchText: value });
  }

  function handleCheckBox(value) {
    setState({ ...state, searchTagOnly: value });
  }

  function handleToolListAddItem(title, link, description, tags) {
    addToolRequest(title, link, description, tags);
  }

  function handleToolListDeleteItem(id) {
    deleteToolRequest(id);
  }

  function renderListItems() {
    if (tools.loading && tools.data.length === 0) {
      return (
        <Styled.EmptyContainer>
          <Styled.BigMessage>Loading...</Styled.BigMessage>
          <Styled.BigFontIcon className="fas fa-circle-notch fa-spin" />
        </Styled.EmptyContainer>
      );
    }

    if (tools.data.length === 0) {
      return (
        <Styled.EmptyContainer>
          <Styled.BigMessage>No data found</Styled.BigMessage>
          <Styled.BigFontIcon className="far fa-surprise" />
        </Styled.EmptyContainer>
      );
    }

    return tools.data.map(item => (
      <ListItem key={item.id} item={item} handleDelete={handleToolListDeleteItem} />
    ));
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
        <Styled.ActionContent>
          <Styled.LeftContent>
            <SearchBox onChange={handleSearchBox} />
            <CheckBox
              name="onlyInTags"
              label="search only in tags"
              checked={state.searchTagOnly}
              onChange={handleCheckBox}
            />
          </Styled.LeftContent>
          <AddItem handleAddItem={handleToolListAddItem} />
        </Styled.ActionContent>
      </Styled.Content>
      <Styled.ListContainer>{renderListItems()}</Styled.ListContainer>
    </Styled.Container>
  );
}

ToolsPage.propTypes = {
  tools: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
        description: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
      }),
    ),
  }).isRequired,
  getToolsRequest: PropTypes.func.isRequired,
  addToolRequest: PropTypes.func.isRequired,
  deleteToolRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tools: state.tools,
});

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolsPage);
