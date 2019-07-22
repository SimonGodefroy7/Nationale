import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledLi from './StyledLi';

const StyledMenu = styled(StyledFlexBox)`
  margin: 1rem;
  margin-bottom: 0;

  ${StyledLi} {
    float: left;
    position: relative;
  }
`

export default StyledMenu;
