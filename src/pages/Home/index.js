import React, { useState, useEffect } from 'react';
import ToolList from '../../components/ToolList';

import { Container, Content } from './styles';

const data = [
  {
    id: 1,
    title: 'Notion',
    link: 'https://notion.so',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
    tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
  },
  {
    id: 2,
    title: 'json-server',
    link: 'https://github.com/typicode/json-server',
    description:
      'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
    tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
  },
  {
    id: 3,
    title: 'fastify',
    link: 'https://www.fastify.io/',
    description:
      'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
    tags: ['web', 'framework', 'node', 'http2', 'https', 'localhost'],
  },
];

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
      <ToolList items={data} />
    </Container>
  );
}

export default Home;
