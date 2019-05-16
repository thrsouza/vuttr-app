import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Button = styled.button`
  background-color: ${colors.blue};
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 12px;
  width: 150px;

  :hover {
    background-color: ${colors.darkerBlue};
  }
`;
