import styled from "styled-components";
import style from "./style";

const StyledAnchor = styled.a`
  color: ${props =>
    props.hoverless ? style.colors.dark : style.colors.secondary};
  text-decoration: none;
  padding: ${props => props.padding};
  display: ${props => (props.centerimg ? "flex" : "")};
  justify-content: ${props => (props.centerimg ? "center" : "")};

  &:hover {
    text-decoration: ${props =>
      props.hovertextdecoration ? "none" : "underline"};
  }
`;

export default StyledAnchor;
