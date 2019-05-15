import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 900px;
  width: 90%;

  .action-box {
    display: flex;
    justify-content: space-between;
    padding: 40px 0 10px 0;
    width: 100%;
    flex-flow: wrap;

    .left {
      display: flex;
      flex-flow: wrap;
      width: 100%;
      max-width: 700px;
    }
  }
`;
