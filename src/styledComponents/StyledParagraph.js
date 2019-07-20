import styled from 'styled-components';
import style from './style';

const StyledParagraph = styled.p`
  font-size: ${style.fontSize.small};
  text-align: ${props => props.textAlign};
  margin: 0;
`

export default StyledParagraph;
