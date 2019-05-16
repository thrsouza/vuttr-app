import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Container = styled.label`
  display: flex;
  padding: 10px;

  > input[type='checkbox'] {
    border-radius: 4px;
    width: 20px;
    height: 20px;
    appearance: none;
    outline: 0;
    background: ${colors.darkestWhite};
    margin-left: 15px;
    margin-right: 10px;

    :checked {
      background: ${colors.blue};
    }
  }
`;
