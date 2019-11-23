import styled from 'styled-components';
import StyledAnchor from './StyledAnchor';
import style from './style';

const StyledMail = styled(StyledAnchor)`
  &:hover {
    color: ${style.colors.secondary};
    background-color: ${style.colors.light};
  }
`

export default StyledMail;
