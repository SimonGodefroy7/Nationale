import styled from 'styled-components';
import mobileSBackground from '../image/Background/MobileS.jpg'
import mobileMBackground from '../image/Background/MobileM.jpg'
import mobileLBackground from '../image/Background/MobileL.jpg'
import tabletBackground from '../image/Background/Tablet.jpg'
import laptopBackground from '../image/Background/Laptop.jpg'
import laptopLBackground from '../image/Background/LaptopL.jpg'
import desktopBackground from '../image/Background/Desktop.jpg'
import style from './style';

const StyledHero = styled('section')`
  display: flex;
  flex-direction: column;
  background-image: url(${mobileSBackground});
  height: 427px;
  align-items: center;
  justify-content: space-around;

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
    height: 459px;
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    background-image: url(${laptopBackground});
    height: 570px;
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    background-image: url(${laptopLBackground});
    height: 651px;
  }
  @media (min-width: ${style.mediaSize.laptopL}) {
    background-image: url(${desktopBackground});
    height: 700px;
  }
  @media (min-width: ${style.mediaSize.desktop}) {
    background-repeat: round;
  }
`

export default StyledHero;
