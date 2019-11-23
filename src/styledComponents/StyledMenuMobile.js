import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledLi from './StyledLi';
import StyledUl from './StyledUl';
import StyledImg from './StyledImg';
import style from './style';

const StyledMenuMobile = styled(StyledFlexBox)`
  ${StyledImg} {
    width: 4rem;
    height: 2rem;
  }
  ${StyledUl} {
    position: absolute;
    width: 12rem;
    right: 1rem;
    z-index: 1;
    top: 5rem;
    background-color: ${style.colors.light};
  }

  ${StyledLi} {
    border: solid;
    border-width: 0.01rem;
    margin: 0;
    padding: 1rem;
  }
`

export default StyledMenuMobile;
