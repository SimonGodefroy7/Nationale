import styled from 'styled-components';
import StyledH1 from './StyledH1';
import style from './style';

const StyledHeader = styled('header')`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;

  ${StyledH1} {
    color: ${style.colors.primary}
  }
`

export default StyledHeader;
