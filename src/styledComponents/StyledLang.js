import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledImg from './StyledImg';

const StyledLang = styled(StyledFlexBox)`
  flex-direction: row;
  ${StyledFlexBox} {
    margin: 0.2rem;
  }
  ${StyledImg} {
    width: 2rem;
    height: 1rem;
  }
`

export default StyledLang;
