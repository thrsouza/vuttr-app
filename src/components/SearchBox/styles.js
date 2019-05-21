import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border: 1px solid ${colors.darkestWhite};
  background-color: ${colors.darkerWhite};
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  max-width: 300px;

  > i {
    font-weight: 900;
    color: ${colors.lighterInk};
  }

  > input {
    border: none;
    background-color: ${colors.darkerWhite};
    width: 100%;
    margin-left: 10px;
  }

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;
