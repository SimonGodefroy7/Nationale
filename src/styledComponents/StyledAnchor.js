import styled from 'styled-components';
import style from './style';

const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${style.colors.secondary};
  text-align: ${props => props.textAlign};
  padding: 0.5rem;

  &:hover {
    color: ${style.colors.light};
    background-color: ${style.colors.secondary};
    border-radius: 0.5rem;
  }
`

export default StyledAnchor;
