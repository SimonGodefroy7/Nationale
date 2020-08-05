import styled from "styled-components";
import StyledFlexBox from "./StyledFlexBox";

const StyledPartners = styled(StyledFlexBox)`
  flex-wrap: wrap;
  ${StyledFlexBox} {
    margin: 0.5rem;
  }
`;

export default StyledPartners;
