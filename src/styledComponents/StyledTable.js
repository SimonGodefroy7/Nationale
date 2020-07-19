import styled from "styled-components";
import style from "./style";

const StyledTable = styled.table`
  display: block;
  overflow-x: auto;
  white-space: nowrap;
  border-collapse: collapse;

  @media (min-width: ${style.mediaSize.tablet}) {
    margin-left: auto;
    margin-right: auto;
    display: unset;
    overflow-x: unset;
    white-space: unset;
  }
`;

export default StyledTable;
