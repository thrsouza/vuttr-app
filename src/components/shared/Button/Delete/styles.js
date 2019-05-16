import styled from 'styled-components';

import colors from '../../../../styles/colors';

export const Button = styled.button`
  color: ${colors.lighterInk};
  font-size: 20px;
  border: none;
  background: none;
  position: absolute;
  top: 15px;
  right: 20px;

  :hover {
    color: ${colors.darkerRed};
  }
`;
