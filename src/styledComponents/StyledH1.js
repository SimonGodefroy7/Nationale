import styled from 'styled-components';
import style from './style';

const StyledH1 = styled.h1`
  color: ${props => props.color || ""};
  font-size: ${style.fontSize.big};
  margin: 0;
`

export default StyledH1;
