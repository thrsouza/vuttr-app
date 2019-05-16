import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToolsActions from '../../store/ducks/tools';

import CheckBox from '../../components/shared/CheckBox';
import SearchBox from '../../components/shared/SearchBox';

import ToolAdd from '../../components/Tools/Add';
import ToolList from '../../components/Tools/List';

import * as Styled from './styles';

function Home({ tools, getToolsRequest, deleteToolRequest }) {
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

  function handleToolListItemDelete(id) {
    deleteToolRequest(id);
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
          <ToolAdd />
        </Styled.ActionContent>
      </Styled.Content>
      <ToolList data={tools.data} handleToolListItemDelete={handleToolListItemDelete} />
    </Styled.Container>
  );
}

Home.propTypes = {
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
  deleteToolRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tools: state.tools,
});

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
