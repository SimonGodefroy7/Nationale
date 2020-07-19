import styled from "styled-components";
import StyledBorderBox from "./StyledBorderBox";
import StyledFlexBox from "./StyledFlexBox";
import style from "./style";

const StyledPartners = styled(StyledBorderBox)`
  flex-wrap: wrap;
  ${StyledFlexBox} {
    margin: 0.5rem;
  }
`;

export default StyledPartners;
