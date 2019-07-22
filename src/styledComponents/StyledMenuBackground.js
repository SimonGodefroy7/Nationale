import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledH1 from './StyledH1';
import StyledH1Short from './StyledH1Short';
import style from './style';

const StyledMenuBackground = styled(StyledFlexBox)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${StyledH1} {
    color: #ef7d28;
  }
  ${StyledH1Short} {
    color: #ef7d28;
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    align-items: unset;
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    align-items: center;
  }
`

export default StyledMenuBackground;
