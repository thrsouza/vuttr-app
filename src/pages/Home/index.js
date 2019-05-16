import React from 'react';

import CheckBox from '../../components/shared/CheckBox';
import SearchBox from '../../components/shared/SearchBox';

import ToolAdd from '../../components/Tools/Add';
import ToolList from '../../components/Tools/List';

import * as Styled from './styles';

const data = null;

function Home() {
  return (
    <Styled.Container>
      <Styled.Content>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
        <Styled.ActionContent>
          <Styled.LeftContent>
            <SearchBox />
            <CheckBox name="onlyInTags" label="search only in tags" checked />
          </Styled.LeftContent>
          <ToolAdd />
        </Styled.ActionContent>
      </Styled.Content>
      <ToolList data={data} />
    </Styled.Container>
  );
}

export default Home;
