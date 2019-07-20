import styled from 'styled-components';

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || "column"};
  justify-content: ${props => props.justifyContent || ""};
  align-items: ${props => props.alignItems || ""};
`

export default StyledFlexBox;
