import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledLi from './StyledLi';

const StyledMenu = styled(StyledFlexBox)`
  ${StyledLi} {
    float: left;
    position: relative;
  }
`

export default StyledMenu;
