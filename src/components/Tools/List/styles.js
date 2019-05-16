import styled from 'styled-components';

import SharedIcon from '../../shared/Icon';

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

export const Icon = styled(SharedIcon)`
  display: flex;
  justify-content: center;
  color: ${colors.mostDarkestWhite};
  margin: 80px 0;
  font-size: 100px;
`;
