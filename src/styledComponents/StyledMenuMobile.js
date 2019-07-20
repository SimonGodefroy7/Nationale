import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledLi from './StyledLi';
import StyledUl from './StyledUl';

const StyledMenuMobile = styled(StyledFlexBox)`
  ${StyledUl} {
    position: absolute;
    width: 20%;
    left: calc(80% - 1rem);
    top: 10%;
    background-color: white;
  }

  ${StyledLi} {
    border: solid;
    border-width: 0.01rem;
    margin: 0;
    padding: 1rem;
  }
`

export default StyledMenuMobile;
