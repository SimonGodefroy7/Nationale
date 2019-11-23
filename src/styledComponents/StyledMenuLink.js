import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyledLi from './StyledLi';

const StyledMenuLink = styled(Link)`
  color: ${props => props.hoverless ? '' : 'green'};
  text-decoration: none;

  &:hover {
    color: ${props => props.hoverless ? '' : 'white'};
  }
  ${StyledLi} {
    border-color: black;
    &:hover {
      background-color: ${props => props.hoverless ? '' : 'green'};
      border-radius: ${props => props.hoverless ? '' : '0.5rem'};
    }
  }
`

export default StyledMenuLink;
