import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.darkestWhite};
  margin: 25px 0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 30px 60px -20px ${colors.darkerWhite};
`;

export const Link = styled.a`
  color: ${colors.blue};
  font-size: 20px;
`;

export const Description = styled.p`
  margin: 10px 0;
  color: ${colors.lightInk};
`;

export const Tags = styled.ul`
  display: flex;
  flex-flow: wrap;
  list-style: none;
  margin-top: 20px;

  li {
    margin-right: 10px;
    font-weight: bold;
  }
`;
