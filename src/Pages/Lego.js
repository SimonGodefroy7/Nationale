import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Page from "../Logic/Page";
import Link from "../Logic/Link";
import StyledH1 from "../styledComponents/StyledH1";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledH3 from "../styledComponents/StyledH3";
import StyledSection from "../styledComponents/StyledSection";
import StyledSpan from "../styledComponents/StyledSpan";
import StyledHero from "../styledComponents/StyledHero";
import StyledFlexBox from "../styledComponents/StyledFlexBox";
import StyledImg from "../styledComponents/StyledImg";
import StyledAnchor from "../styledComponents/StyledAnchor";
import StyledHeroHeadline from "../styledComponents/StyledHeroHeadline";
import Translator from "../Logic/Translator";
import mobileSBackground from "../image/Background/MobileS.jpg";
import mobileMBackground from "../image/Background/MobileM.jpg";
import mobileLBackground from "../image/Background/MobileL.jpg";
import tabletBackground from "../image/Background/Tablet.jpg";
import laptopBackground from "../image/Background/Laptop.jpg";
import laptopLBackground from "../image/Background/LaptopL.jpg";
import desktopBackground from "../image/Background/Desktop.jpg";
import resultsLEGOSmallTrack from "../image/Lego/LEG-O-Precision - Participants du petit circuit.jpg";
import resultsLEGOBigTrack from "../image/Lego/LEG-O-Precision - Resultats Grand circuit.jpg";
import legoMap from "../image/cartelego.jpg";
import lego from "../image/LegoSmall.jpg";

class Lego extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Lego | Nationale Nord Ouest 2020</title>
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
          <StyledHeroHeadline>
            <StyledH1>
              <Translator id="Lego.bacgroundParagraph" />
            </StyledH1>
          </StyledHeroHeadline>
        </StyledHero>
        <StyledSection justify>
          <StyledH1>
            <Translator id="Lego.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="Lego.lastUpate" />
          </StyledSpan>
          <StyledBorderBox>
            <StyledH3>Résultats</StyledH3>
            <StyledParagraph>
              <StyledSpan>
                <StyledAnchor href={resultsLEGOSmallTrack} target="_blank">
                  Résultats
                </StyledAnchor>
              </StyledSpan>
              <StyledSpan> du petit circuit</StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan>
                <StyledAnchor href={resultsLEGOBigTrack} target="_blank">
                  Résultats
                </StyledAnchor>
              </StyledSpan>
              <StyledSpan> du grand circuit</StyledSpan>
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Lego.box0Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Lego.box0Paragraph" />
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Lego.box1Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Lego.box1Paragraph1" />
            </StyledParagraph>
            <StyledParagraph>
              <Translator id="Lego.box1Paragraph2" />
            </StyledParagraph>
            <StyledParagraph>
              <Translator id="Lego.box1Paragraph3" />
            </StyledParagraph>
            <StyledFlexBox>
              <StyledImg src={lego} alt={lego} imageWidth="100%" />
            </StyledFlexBox>
            <StyledParagraph>
              <Translator id="Lego.box1Paragraph4" />
            </StyledParagraph>
            <StyledFlexBox alignItems="center">
              <StyledImg src={legoMap} alt={legoMap} imageWidth="80%" />
            </StyledFlexBox>
            <StyledParagraph>
              <Translator id="Lego.box1Paragraph5" />
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan>
                <Translator id="Lego.box1Paragraph61" />
              </StyledSpan>
              <StyledSpan>
                <StyledAnchor href="https://www.facebook.com/events/295544194838175">
                  <Translator id="Lego.box1Paragraph62" />
                </StyledAnchor>
              </StyledSpan>
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Lego.box2Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Lego.box2Paragraph" />
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Lego.box3Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Lego.box3Paragraph1" />
            </StyledParagraph>
            <StyledParagraph>
              <Translator id="Lego.box3Paragraph2" />
            </StyledParagraph>
            <StyledParagraph>
              <Translator id="Lego.box3Paragraph3" />
            </StyledParagraph>
            <StyledParagraph>
              <Translator id="Lego.box3Paragraph4" />
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="Lego.box4Paragraph11" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="Lego.box4Paragraph12" />
              </StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="Lego.box4Paragraph21" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="Lego.box4Paragraph22" />
              </StyledSpan>
            </StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Lego;
