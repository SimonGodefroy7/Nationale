import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import style from './style';

const StyledPracticalInfo = styled(StyledFlexBox)`
  ${StyledFlexBox} {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    ${style.collapseMarginMixin}
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    flex-direction: row;
    ${StyledFlexBox} {
      margin: 0;
      width: 50%;
    }
  }
`

export default StyledPracticalInfo;
