import styled from 'styled-components';
import style from './style';

const StyledH1 = styled.h3`
  font-size: ${style.fontSize.medium};
  margin: 1rem 0;

  ${style.collapseMarginMixin}
`;

export default StyledH1;
