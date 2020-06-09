import styled from "styled-components";

const StyledFlexBox = styled.div`
  display: flex;
  margin: ${props => props.margin || ""};
  width: ${props => props.width || ""};
  flex-direction: ${props => props.flexDirection || "column"};
  justify-content: ${props => props.justifyContent || ""};
  align-items: ${props => props.alignItems || ""};
  flex-grow: ${props => props.flexGrow || "0"};
`;

export default StyledFlexBox;
