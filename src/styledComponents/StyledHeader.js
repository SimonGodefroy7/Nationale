import styled from 'styled-components';
import StyledSection from './StyledSection';
import StyledMenu from './StyledMenu';
import StyledMenuMobile from './StyledMenuMobile';
import StyledTabletBox from './StyledTabletBox';
import StyledH1 from './StyledH1';
import StyledH1Short from './StyledH1Short';
import style from './style';
import backgroundLaptop from '../image/P1010634.JPG';
import backgroundMobile from '../image/P1010635.JPG';

const StyledHeader = styled(StyledSection)`
  /*background-image: url(${backgroundMobile});*/
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
    /*background-image: url(${backgroundLaptop});*/
    ${StyledTabletBox} {
      display: none;
    }
    ${StyledH1} {
      display: flex;
    }
    ${StyledH1Short} {
      display: none;
    }
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    ${StyledH1} {
      display: none;
    }
    ${StyledH1Short} {
      display: flex;
    }
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
  @media (min-width: ${style.mediaSize.laptopL}) {
    ${StyledH1} {
      display: flex;
    }
    ${StyledH1Short} {
      display: none;
    }
  }
`

export default StyledHeader;
