import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';

function Home() {
  const [stateExample1] = useState([]);
  const [stateExample2, setStateExample2] = useState([]);

  useEffect(() => {
    setStateExample2([...stateExample1, ...stateExample2]);
  }, [stateExample1, stateExample2]);

  return (
    <Container>
      <Content>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
        <div className="action-box">
          <div className="left">
            <div className="global-search-box">
              <i className="fas fa-search" />
              <input type="text" id="search" name="search" placeholder="search" />
            </div>
            <label className="global-checkbox" htmlFor="onlyInTags">
              <input type="checkbox" id="onlyInTags" name="onlyInTags" />
              search only in tags
            </label>
          </div>
          <button className="global-button global-button-blue" type="button">
            <i className="fas fa-plus" />
            {' Add'}
          </button>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
