import styled from 'styled-components';

import FontIcon from '../../../components/FontIcon';

import colors from '../../../styles/colors';

export const Container = styled.div`
  margin-bottom: 50px;
  max-width: 900px;
  width: 90%;
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  max-width: 900px;
  width: 100%;
`;

export const Icon = styled(FontIcon)`
  display: flex;
  justify-content: center;
  color: ${colors.mostDarkestWhite};
  margin: 80px 0;
  font-size: 100px;
`;
