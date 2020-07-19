import React, { Component } from "react";
import { Helmet } from "react-helmet";
import YouTube from "react-youtube";
import Link from "../Logic/Link";
import Page from "../Logic/Page";
import Translator from "../Logic/Translator";
import StyledH1 from "../styledComponents/StyledH1";
import StyledH3 from "../styledComponents/StyledH3";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledSection from "../styledComponents/StyledSection";
import StyledHero from "../styledComponents/StyledHero";
import StyledHeroHeadline from "../styledComponents/StyledHeroHeadline";
import StyledBalise from "../styledComponents/StyledBalise";
import StyledBaliseBox from "../styledComponents/StyledBaliseBox";
import StyledFlexBox from "../styledComponents/StyledFlexBox";
import StyledAnchor from "../styledComponents/StyledAnchor";
import StyledMapExtract from "../styledComponents/StyledMapExtract";
import StyledSpan from "../styledComponents/StyledSpan";
import StyledImg from "../styledComponents/StyledImg";
import mobileSBackground from "../image/Background/MobileS.jpg";
import mobileMBackground from "../image/Background/MobileM.jpg";
import mobileLBackground from "../image/Background/MobileL.jpg";
import tabletBackground from "../image/Background/Tablet.jpg";
import laptopBackground from "../image/Background/Laptop.jpg";
import laptopLBackground from "../image/Background/LaptopL.jpg";
import desktopBackground from "../image/Background/Desktop.jpg";
import zoneInterditeSmall from "../image/ZoneinterditeNationales_NO_2020_small.jpg";
import smallImage1 from "../image/Gallery/small/Image1.jpg";
import smallImage2 from "../image/Gallery/small/Image2.jpg";
import franchard10 from "../image/MapExtract/Franchard10Small.jpg";
import salamandre3 from "../image/MapExtract/Salamandre3Small.png";
import chateauLandon1 from "../image/MapExtract/ChateauLandon1Small.jpg";
import B771 from "../image/MapExtract/B77-1Small.jpg";
import OPA3 from "../image/MapExtract/OPA3Small.jpg";

class Home extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Accueil | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledHero
          backgroundImageMobileS={mobileSBackground}
          backgroundImageMobileM={mobileMBackground}
          backgroundImageMobileL={mobileLBackground}
          backgroundImageTablet={tabletBackground}
          backgroundImageLaptop={laptopBackground}
          backgroundImageLaptopL={laptopLBackground}
          backgroundImageDesktop={desktopBackground}
        >
          <StyledHeroHeadline big>
            <StyledH1>
              <Translator id="Home.bacgroundParagraph" />
            </StyledH1>
          </StyledHeroHeadline>
          <StyledFlexBox
            flexDirection="row"
            justifyContent="space-between"
            width="80%"
          >
            <StyledAnchor as={Link} hoverless paddingless to="/sprint">
              <StyledBalise>
                <StyledH1>
                  <Translator id="Home.baliseSpTitle" />
                </StyledH1>
                <StyledBaliseBox>
                  <StyledParagraph margin="0rem">
                    <Translator id="Home.baliseSpParagraph1" />
                  </StyledParagraph>
                  <StyledParagraph margin="0rem">
                    <Translator id="Home.baliseSpParagraph2" />
                  </StyledParagraph>
                </StyledBaliseBox>
              </StyledBalise>
            </StyledAnchor>
            <StyledAnchor as={Link} hoverless paddingless to="long-distance">
              <StyledBalise>
                <StyledH1>
                  <Translator id="Home.baliseLdTitle" />
                </StyledH1>
                <StyledBaliseBox>
                  <StyledParagraph margin="0rem">
                    <Translator id="Home.baliseLdParagraph1" />
                  </StyledParagraph>
                  <StyledParagraph margin="0rem">
                    <Translator id="Home.baliseLdParagraph2" />
                  </StyledParagraph>
                </StyledBaliseBox>
              </StyledBalise>
            </StyledAnchor>
          </StyledFlexBox>
          <StyledFlexBox>
            <StyledAnchor as={Link} hoverless paddingless to="/middle-distance">
              <StyledBalise>
                <StyledH1>
                  <Translator id="Home.baliseMdTitle" />
                </StyledH1>
                <StyledBaliseBox>
                  <StyledParagraph margin="0rem">
                    <Translator id="Home.baliseMdParagraph1" />
                  </StyledParagraph>
                  <StyledParagraph margin="0rem">
                    <Translator id="Home.baliseMdParagraph2" />
                  </StyledParagraph>
                </StyledBaliseBox>
              </StyledBalise>
            </StyledAnchor>
          </StyledFlexBox>
        </StyledHero>
        <StyledSection>
          <StyledH1>
            <Translator id="Home.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="Home.lastUpate" />
          </StyledSpan>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="LandingPage.Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="LandingPage.paragraph1" />
            </StyledParagraph>
            <StyledParagraph>
              <Translator id="LandingPage.paragraph2" />
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Home.trailer" />
            </StyledH3>
            <YouTube
              videoId="qlYWLr4Nk9M"
              containerClassName="youtubeContainer"
            />
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Home.box1Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Home.box11Paragraph" />
            </StyledParagraph>
            <ul>
              <li>
                <StyledParagraph>
                  <Translator id="Home.box121Paragraph" />
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph>
                  <Translator id="Home.box122Paragraph" />
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph>
                  <Translator id="Home.box123Paragraph" />
                </StyledParagraph>
              </li>
            </ul>
            <StyledParagraph>
              <Translator id="Home.box13Paragraph" />
            </StyledParagraph>
            <StyledParagraph>
              <Translator id="Home.box14Paragraph" />
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="Home.box15ParagraphTitle" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="Home.box15Paragraph" />
              </StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="Home.box16ParagraphTitle" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="Home.box16Paragraph" />
              </StyledSpan>
            </StyledParagraph>
            <StyledFlexBox flexDirection="row" alignItems="center">
              <StyledParagraph>
                <StyledSpan fontWeight="bold">
                  <Translator id="Home.box17ParagraphTitle" />
                </StyledSpan>
                <StyledSpan>
                  <Translator id="Home.box171Paragraph" />
                </StyledSpan>
                <StyledSpan>
                  <StyledAnchor
                    href="http://licences.ffcorientation.fr/inscriptions/"
                    textAlign="center"
                  >
                    FFCO
                  </StyledAnchor>
                </StyledSpan>
                <StyledSpan>
                  <Translator id="Home.box172Paragraph" />
                </StyledSpan>
              </StyledParagraph>
            </StyledFlexBox>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Home.box5Title" />
            </StyledH3>
            <StyledMapExtract>
              <StyledFlexBox>
                <StyledImg src={salamandre3} alt={salamandre3} />
                <StyledAnchor as={Link} to="/middle-distance#mapExtracts">
                  <StyledParagraph textAlign="center">
                    <Translator id="Home.box5Paragraph1" />
                  </StyledParagraph>
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={franchard10} alt={franchard10} />
                <StyledAnchor as={Link} to="/long-distance#mapExtracts">
                  <StyledParagraph textAlign="center">
                    <Translator id="Home.box5Paragraph2" />
                  </StyledParagraph>
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={chateauLandon1} alt={chateauLandon1} />
                <StyledAnchor as={Link} to="/sprint#mapExtracts">
                  <StyledParagraph textAlign="center">
                    <Translator id="Home.box5Paragraph3" />
                  </StyledParagraph>
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={B771} alt={B771} />
                <StyledAnchor as={Link} to="/training#mapExtracts1">
                  <StyledParagraph textAlign="center">
                    <Translator id="Home.box5Paragraph4" />
                  </StyledParagraph>
                </StyledAnchor>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={OPA3} alt={OPA3} />
                <StyledAnchor as={Link} to="/training#mapExtracts2">
                  <StyledParagraph textAlign="center">
                    <Translator id="Home.box5Paragraph5" />
                  </StyledParagraph>
                </StyledAnchor>
              </StyledFlexBox>
            </StyledMapExtract>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Home.box6Title" />
            </StyledH3>
            <StyledFlexBox
              flexDirection="row"
              justifyContent="space-around"
              margin="1rem"
            >
              <StyledImg src={smallImage1} alt={smallImage1} imageWidth="40%" />
              <StyledImg src={smallImage2} alt={smallImage2} imageWidth="40%" />
            </StyledFlexBox>
            <StyledParagraph textAlign="center">
              <StyledAnchor as={Link} to="/gallery">
                <Translator id="Home.box6Paragraph" />
              </StyledAnchor>
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Home.box2Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Home.box2Paragraph" />
            </StyledParagraph>
            <StyledAnchor
              as={Link}
              hoverless
              to="/download/Nationales_NO_2020.pdf"
              target="_blank"
              download
            >
              <StyledImg
                src={zoneInterditeSmall}
                alt={zoneInterditeSmall}
                imageWidth="100%"
              />
            </StyledAnchor>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Home.box3Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Home.box3Paragraph" />
            </StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Home;
