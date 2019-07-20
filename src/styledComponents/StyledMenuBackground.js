import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import style from './style';

const StyledMenuBackground = styled(StyledFlexBox)`
  @media (min-width: ${style.mediaSize.laptop}) {
    border-style: solid;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom: none;
  }
`

export default StyledMenuBackground;
