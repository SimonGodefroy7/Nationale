import styled from 'styled-components';
import style from './style';

const StyledH1 = styled.h1`
  color: ${props => props.color || ""};
  font-size: ${style.fontSize.big};
  margin: 1rem 0;

  ${style.collapseMarginMixin}
`

export default StyledH1;
