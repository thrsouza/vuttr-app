import styled from 'styled-components';
import * as unform from '@rocketseat/unform';

import colors from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;

  > input + span,
  > textarea + span {
    display: flex;
    flex-flow: row-reverse;
    margin-top: 5px;
    color: ${colors.red};
  }
`;

export const Input = styled(unform.Input)`
  background-color: ${colors.darkerWhite};
  border: 1px solid ${colors.darkestWhite};
  border-radius: 3px;
  padding: 10px;
`;

export const Textarea = styled(unform.Textarea)`
  background-color: ${colors.darkerWhite};
  border: 1px solid ${colors.darkestWhite};
  border-radius: 3px;
  padding: 10px;
  min-height: 100px;
  max-height: 100px;
  min-width: 100%;
  max-width: 100%;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 25px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 30px;
`;

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
