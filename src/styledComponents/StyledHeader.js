import styled from 'styled-components';
import StyledSection from './StyledSection';
import StyledMenu from './StyledMenu';
import StyledMenuMobile from './StyledMenuMobile';
import StyledTabletBox from './StyledTabletBox';
import StyledH1 from './StyledH1';
import StyledH1Short from './StyledH1Short';
import style from './style';

const StyledHeader = styled(StyledSection)`
  justify-content: space-between;
  ${StyledH1} {
    display: none;
  }
  ${StyledH1Short} {
    display: flex;
  }
  ${StyledMenu} {
    display: none;
  }

  @media (min-width: ${style.mediaSize.tablet}) {
    ${StyledH1} {
      display: flex;
    }
    ${StyledH1Short} {
      display: none;
    }
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    ${StyledTabletBox} {
      display: flex;
    }
    justify-content: unset;
    ${StyledMenuMobile} {
      display: none;
    }
    ${StyledMenu} {
      display: flex;
    }
  }
`

export default StyledHeader;
