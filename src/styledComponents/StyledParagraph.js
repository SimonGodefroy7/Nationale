import styled from "styled-components";
import style from "./style";

const StyledParagraph = styled.p`
  font-size: ${style.fontSize.small};
  text-align: ${props => props.textAlign};
  margin: ${props => (props.margin ? props.margin : "0.5rem 0")};
`;

export default StyledParagraph;
