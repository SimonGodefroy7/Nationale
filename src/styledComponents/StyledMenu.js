import styled from 'styled-components';
import StyledLi from './StyledLi';

const StyledMenu = styled('nav')`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-bottom: 0;

  ${StyledLi} {
    float: left;
    position: relative;
  }
`

export default StyledMenu;
