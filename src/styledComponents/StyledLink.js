import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: ${props => props.hoverless ? '' : 'green'};
  text-decoration: none;
  padding: ${props => props.paddingless ? '0' : '0.5rem'};

  &:hover {
    color: ${props => props.hoverless ? '' : 'white'};
    background-color: ${props => props.hoverless ? '' : 'green'};
    border-radius: ${props => props.hoverless ? '' : '0.5rem'};
  }
`

export default StyledLink;
