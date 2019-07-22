import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import style from './style';

const StyledMenuBackground = styled(StyledFlexBox)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${style.mediaSize.tablet}) {
    align-items: unset;
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    align-items: center;
  }
`

export default StyledMenuBackground;
