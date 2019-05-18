import styled from 'styled-components';
import Button from '../../../components/Button';

import colors from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  max-width: 320px;
  width: 100%;
`;

export const CancelButton = styled(Button)`
  background-color: ${colors.lighterInk};

  :hover {
    background-color: ${colors.lightInk};
  }
`;
export const RemoveButton = styled(Button)`
  background-color: ${colors.red};
  margin-left: 20px;

  :hover {
    background-color: ${colors.darkerRed};
  }
`;
