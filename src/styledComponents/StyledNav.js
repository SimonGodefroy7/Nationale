import styled from 'styled-components';
import style from './style';

const StyledNav = styled.nav`
  text-align: center;
  margin: 0;
  padding: 0;
  height: 15rem;
  border-style: solid;
  @media (min-width: ${style.mediaSize.tablet}) {
    height: 3rem;
  }
`

export default StyledNav;
