import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledLi from './StyledLi';
import style from './style';

const StyledMenuLink = styled(Link)`
  color: ${props => props.hoverless ? '' : style.colors.secondary};
  text-decoration: none;

  &:hover {
    color: ${props => props.hoverless ? '' : style.colors.light};
  }
  ${StyledLi} {
    border-color: black;
    &:hover {
      background-color: ${props => props.hoverless ? '' : style.colors.secondary};
      border-radius: ${props => props.hoverless ? '' : '0.5rem'};
    }
  }
`

export default StyledMenuLink;
