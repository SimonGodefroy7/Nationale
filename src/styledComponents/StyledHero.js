import styled from "styled-components";
import style from "./style";

const StyledHero = styled("section")`
  display: flex;
  flex-direction: column;
  background-image: ${props => `url(${props.backgroundImageMobileS})`};
  background-repeat: ${props => (props.isPortrait ? "no-repeat" : "")};
  background-position: ${props => (props.isPortrait ? "center" : "")};
  height: ${props => (props.isPortrait ? "600px" : "427px")};
  align-items: center;
  justify-content: space-around;

  @media (min-width: ${style.mediaSize.mobileS}) {
    background-image: ${props => `url(${props.backgroundImageMobileM})`};
    height: ${props => (props.isPortrait ? "600px" : "500px")};
  }
  @media (min-width: ${style.mediaSize.mobileM}) {
    background-image: ${props => `url(${props.backgroundImageMobileL})`};
    height: ${props => (props.isPortrait ? "600px" : "567px")};
  }
  @media (min-width: ${style.mediaSize.mobileL}) {
    background-image: ${props => `url(${props.backgroundImageTablet})`};
    height: ${props => (props.isPortrait ? "600px" : "459px")};
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    background-image: ${props => `url(${props.backgroundImageLaptop})`};
    height: ${props => (props.isPortrait ? "600px" : "570px")};
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    background-image: ${props => `url(${props.backgroundImageLaptopL})`};
    height: ${props => (props.isPortrait ? "600px" : "651px")};
  }
  @media (min-width: ${style.mediaSize.laptopL}) {
    background-image: ${props => `url(${props.backgroundImageDesktop})`};
    height: ${props => (props.isPortrait ? "600px" : "700px")};
  }
  @media (min-width: ${style.mediaSize.desktop}) {
    ${props => (props.isPortrait ? "" : "background-repeat: round;")}
  }
`;

export default StyledHero;
