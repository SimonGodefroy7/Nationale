import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import StyledLi from './StyledLi';

const StyledMenuLink = styled(HashLink)`
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
