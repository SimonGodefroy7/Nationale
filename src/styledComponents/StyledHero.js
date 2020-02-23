import styled from 'styled-components';
import mobileSBackground from '../image/Background/MobileS.jpg'
import mobileMBackground from '../image/Background/MobileM.jpg'
import mobileLBackground from '../image/Background/MobileL.jpg'
import tabletBackground from '../image/Background/Tablet.jpg'
import laptopBackground from '../image/Background/Laptop.jpg'
import laptopLBackground from '../image/Background/LaptopL.jpg'
import desktopBackground from '../image/Background/Desktop.jpg'
import flyerSmall from '../image/flyerSmall.jpg';
import style from './style';

const StyledHero = styled('section')`
  display: flex;
  flex-direction: column;
  background-image: ${props => props.landingPage ? `url(${flyerSmall})` : `url(${mobileSBackground})`};
  background-repeat: ${props => props.landingPage ? "no-repeat" : ""};
  background-position: ${props => props.landingPage ? "center" : ""};
  height: ${props => props.landingPage ? "600px" : "427px"};
  align-items: center;
  justify-content: space-around;

  @media (min-width: ${style.mediaSize.mobileS}) {
    background-image: ${props => props.landingPage ? `url(${flyerSmall})` : `url(${mobileMBackground})`};
    height: ${props => props.landingPage ? "600px" : "500px"};
  }
  @media (min-width: ${style.mediaSize.mobileM}) {
    background-image: ${props => props.landingPage ? `url(${flyerSmall})` : `url(${mobileLBackground})`};
    height: ${props => props.landingPage ? "600px" : "567px"};
  }
  @media (min-width: ${style.mediaSize.mobileL}) {
    background-image: ${props => props.landingPage ? `url(${flyerSmall})` : `url(${tabletBackground})`};
    height: ${props => props.landingPage ? "600px" : "459px"};
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    background-image: ${props => props.landingPage ? `url(${flyerSmall})` : `url(${laptopBackground})`};
    height: ${props => props.landingPage ? "600px" : "570px"};
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    background-image: ${props => props.landingPage ? `url(${flyerSmall})` : `url(${laptopLBackground})`};
    height: ${props => props.landingPage ? "600px" : "651px"};
  }
  @media (min-width: ${style.mediaSize.laptopL}) {
    background-image: ${props => props.landingPage ? `url(${flyerSmall})` : `url(${desktopBackground})`};
    height: ${props => props.landingPage ? "600px" : "700px"};
  }
  @media (min-width: ${style.mediaSize.desktop}) {
    background-repeat: round;
  }
`

export default StyledHero;
