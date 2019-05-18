import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-flow: wrap;
  border: 1px solid ${colors.darkestWhite};
  background-color: ${colors.darkerWhite};
  border-radius: 3px;
  padding: 5px;
  width: 100%;

  .ReactTags__tags {
    display: flex;
    flex-flow: wrap;
    width: 100%;

    .ReactTags__tagInput {
      width: 100%;
      display: flex;

      input {
        border: none;
        border-bottom: 1px dashed ${colors.mostDarkestWhite};
        padding: 5px 5px 10px;
        background-color: ${colors.darkerWhite};
        margin: 3px;
        width: 100%;
      }
    }

    .ReactTags__selected {
      display: flex;
      flex-flow: wrap;
      width: 100%;
      max-height: 150px;
      overflow-y: scroll;

      .ReactTags__tag {
        padding: 10px 0 10px 15px;
        background-color: ${colors.lighterInk};
        color: ${colors.white};
        margin: 3px;
        border-radius: 3px;

        .ReactTags__remove {
          background-color: ${colors.lightInk};
          padding: 10px;
          margin-left: 10px;
          border-radius: 0 3px 3px 0;
          cursor: pointer;
        }
      }
    }
  }
`;
