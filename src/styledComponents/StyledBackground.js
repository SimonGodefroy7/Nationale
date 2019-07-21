import styled from 'styled-components';
import StyledSection from './StyledSection';
import mobileSBackground from '../image/MobileS.jpg'
import mobileMBackground from '../image/MobileM.jpg'
import mobileLBackground from '../image/MobileL.jpg'
import tabletBackground from '../image/Tablet.jpg'
import laptopBackground from '../image/Laptop.jpg'
import laptopLBackground from '../image/LaptopL.jpg'
import desktopBackground from '../image/desktop.jpg'
import style from './style';

const StyledBackground = styled(StyledSection)`
  padding: 0;
  background-image: url(${mobileSBackground});
  height: 427px;
  @media (min-width: ${style.mediaSize.mobileS}) {
    background-image: url(${mobileMBackground});
    height: 500px;
  }
  @media (min-width: ${style.mediaSize.mobileM}) {
    background-image: url(${mobileLBackground});
    height: 567px;
  }
  @media (min-width: ${style.mediaSize.mobileL}) {
    background-image: url(${tabletBackground});
    height: 576px;
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    background-image: url(${laptopBackground});
    height: 768px;
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    background-image: url(${laptopLBackground});
    height: 1080px;
  }
  @media (min-width: ${style.mediaSize.laptopL}) {
    background-image: url(${desktopBackground});
    height: 1920px;
  }
  @media (min-width: ${style.mediaSize.desktop}) {
    background-repeat: round;
  }
`

export default StyledBackground;
