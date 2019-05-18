import styled from 'styled-components';

import FontIcon from '../../components/FontIcon';

import colors from '../../styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 80px 0;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 900px;
  width: 90%;
`;

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 10px 0;
  width: 100%;
  flex-flow: wrap;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  max-width: 700px;
`;

export const ListContainer = styled.div`
  margin-bottom: 50px;
  max-width: 900px;
  width: 90%;
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  max-width: 900px;
  width: 100%;
  height: 300px;
`;

export const BigFontIcon = styled(FontIcon)`
  display: flex;
  justify-content: center;
  color: ${colors.mostDarkestWhite};
  margin: 50px 10px;
  font-size: 100px;
`;

export const BigMessage = styled.h1`
  display: flex;
  justify-content: center;
  color: ${colors.mostDarkestWhite};
  margin: 50px 10px;
  font-size: 60px;
`;
