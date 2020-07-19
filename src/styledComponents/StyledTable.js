import styled from "styled-components";
import style from "./style";

const StyledTable = styled.table`
  display: block;
  overflow-x: auto;
  white-space: nowrap;
  border-collapse: collapse;

  @media (min-width: ${style.mediaSize.tablet}) {
    display: unset;
    overflow-x: unset;
    white-space: unset;
  }
`;

export default StyledTable;
