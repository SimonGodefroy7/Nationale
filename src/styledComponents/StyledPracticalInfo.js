import styled from "styled-components";
import StyledFlexBox from "./StyledFlexBox";
import style from "./style";

const StyledPracticalInfo = styled(StyledFlexBox)`
  @media (min-width: ${style.mediaSize.tablet}) {
    flex-direction: row;
    ${StyledFlexBox} {
      margin: 0;
      width: 50%;
    }
  }
`;

export default StyledPracticalInfo;
