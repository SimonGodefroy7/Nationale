import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledLi from './StyledLi';
import StyledUl from './StyledUl';
import style from './style';

const StyledMenuMobile = styled(StyledFlexBox)`
  ${StyledUl} {
    position: absolute;
    width: 12rem;
    right: 1rem;
    top: 5rem;
    @media (min-width: ${style.mediaSize.mobileM}) {
      top: 3.5rem;
    }
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
