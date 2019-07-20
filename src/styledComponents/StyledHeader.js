import styled from 'styled-components';
import StyledSection from './StyledSection';
import style from './style';
import headerBackgroundLaptop from '../image/HeaderBackgroundLaptop.jpg';
import headerBackgroundMobile from '../image/HeaderbackgroundMobile.jpg';

const StyledHeader = styled(StyledSection)`
  /*background-image: url(${headerBackgroundMobile});
  @media (min-width: ${style.mediaSize.tablet}) {
    background-image: url(${headerBackgroundLaptop});
  }*/
`

export default StyledHeader;
