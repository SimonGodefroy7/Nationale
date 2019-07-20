import styled from 'styled-components';
import StyledSection from './StyledSection';
import StyledMenu from './StyledMenu';
import StyledMenuMobile from './StyledMenuMobile';
import style from './style';
import headerBackgroundLaptop from '../image/HeaderBackgroundLaptop.jpg';
import headerBackgroundMobile from '../image/HeaderbackgroundMobile.jpg';

const StyledHeader = styled(StyledSection)`
  /*background-image: url(${headerBackgroundMobile});
  @media (min-width: ${style.mediaSize.tablet}) {
    background-image: url(${headerBackgroundLaptop});
  }*/
  justify-content: space-between;
  flex-direction: row;
  ${StyledMenu} {
    display: none;
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    flex-direction: column;
    ${StyledMenuMobile} {
      display: none;
    }
    ${StyledMenu} {
      display: flex;
    }
  }
`

export default StyledHeader;
