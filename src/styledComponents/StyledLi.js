import styled from 'styled-components';
import style from './style';

const StyledLi = styled.li`
  position: relative;
  margin: 1rem;
  padding: 0;
  @media (min-width: ${style.mediaSize.tablet}) {
    float: left;
  }
`

export default StyledLi;
