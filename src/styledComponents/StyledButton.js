import styled from "styled-components";
import style from "./style";

const StyledButton = styled.button`
  font-size: 1em;
  text-decoration: none;
  cursor: pointer;
  color: ${props =>
    props.isSelected ? style.colors.primary : style.colors.secondary};
  width: ${props => props.width || ""};
  padding: ${props => props.padding || ""};
  margin: ${props => props.margin || ""};
  background-color: ${props =>
    props.isSelected ? style.colors.secondary : style.colors.light};
  border: ${props =>
    props.isSelected
      ? `2px solid ${style.colors.primary}`
      : `2px solid ${style.colors.secondary}`};

  &:hover {
    ${props =>
      props.noHover
        ? ""
        : `
        color: ${
          props.isSelected ? style.colors.secondary : style.colors.primary
        };
        background-color: ${
          props.isSelected ? style.colors.light : style.colors.secondary
        };
        border: ${
          props.isSelected
            ? `2px solid ${style.colors.secondary}`
            : `2px solid ${style.colors.primary}`
        };
          `}
  }
`;

export default StyledButton;
