import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import Page from "../Logic/Page";
import Link from "../Logic/Link";
import StyledH1 from "../styledComponents/StyledH1";
import StyledSection from "../styledComponents/StyledSection";
import StyledH3 from "../styledComponents/StyledH3";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledFlexBox from "../styledComponents/StyledFlexBox";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledHero from "../styledComponents/StyledHero";
import StyledSpan from "../styledComponents/StyledSpan";
import StyledHeroHeadline from "../styledComponents/StyledHeroHeadline";
import StyledTrackGrid from "../styledComponents/StyledTrackGrid";
import StyledPracticalInfo from "../styledComponents/StyledPracticalInfo";
import StyledAnchor from "../styledComponents/StyledAnchor";
import StyledMapExtract from "../styledComponents/StyledMapExtract";
import StyledImg from "../styledComponents/StyledImg";
import Translator from "../Logic/Translator";
import style from "../styledComponents/style";
import franchard1 from "../image/MapExtract/Franchard1Small.jpg";
import franchard2 from "../image/MapExtract/Franchard2Small.jpg";
import franchard7 from "../image/MapExtract/Franchard7Small.jpg";
import franchard10 from "../image/MapExtract/Franchard10Small.jpg";
import mobileSBackground from "../image/Background/MobileS.jpg";
import mobileMBackground from "../image/Background/MobileM.jpg";
import mobileLBackground from "../image/Background/MobileL.jpg";
import tabletBackground from "../image/Background/Tablet.jpg";
import laptopBackground from "../image/Background/Laptop.jpg";
import laptopLBackground from "../image/Background/LaptopL.jpg";
import desktopBackground from "../image/Background/Desktop.jpg";

class LongDistance extends Component {
  render() {
    let iFrameWidth;
    let iFrameHeight;
    if (window.matchMedia(`(max-width: ${style.mediaSize.mobileS})`).matches) {
      iFrameWidth = 200;
      iFrameHeight = 200;
    } else if (
      window.matchMedia(`(max-width: ${style.mediaSize.mobileM})`).matches
    ) {
      iFrameWidth = 250;
      iFrameHeight = 250;
    } else if (
      window.matchMedia(`(max-width: ${style.mediaSize.mobileL})`).matches
    ) {
      iFrameWidth = 300;
      iFrameHeight = 300;
    } else if (
      window.matchMedia(`(max-width: ${style.mediaSize.tablet})`).matches
    ) {
      iFrameWidth = 600;
      iFrameHeight = 400;
    } else {
      iFrameWidth = 800;
      iFrameHeight = 600;
    }
    let state = this.props;
    let isEnglish = state.langue === "en";
    return (
      <Page>
        <Helmet>
          <title>Longue Distance | Nationale Nord Ouest 2020</title>
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
          <StyledHeroHeadline isEnglish={isEnglish} medium>
            <StyledH1>
              <Translator id="LDEvent.bacgroundParagraph" />
            </StyledH1>
          </StyledHeroHeadline>
        </StyledHero>
        <StyledSection>
          <StyledH1>
            <Translator id="LDEvent.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="LDEvent.lastUpate" />
          </StyledSpan>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="LDEvent.box1Title" />
            </StyledH3>
            <StyledPracticalInfo>
              <StyledFlexBox>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1DateTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1DateParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1StartListTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1StartListParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1ResultTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1ResultParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1ParkHomeDistanceTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1ParkHomeDistanceParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1HomeStartDistanceTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1HomeStartDistanceParagraph" />
                  </StyledSpan>
                </StyledParagraph>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1OfficialBookTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1OfficialBookParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1RaceAnnouncementTitle" />
                  </StyledSpan>
                  <StyledAnchor
                    as={Link}
                    to="/download/LD PDF.pdf"
                    target="_blank"
                    download
                  >
                    <StyledSpan>
                      <Translator id="LDEvent.box1RaceAnnouncementParagraph" />
                    </StyledSpan>
                  </StyledAnchor>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1TrackDirectorTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1TrackDirectorParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="LDEvent.box1PlacesTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1PlacesParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1MapTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1MapParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
              </StyledFlexBox>
            </StyledPracticalInfo>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="LDEvent.box1PlanTitle" />
            </StyledH3>
            <StyledFlexBox alignItems="center">
              <iframe
                title="plan"
                width={iFrameWidth}
                height={iFrameHeight}
                frameborder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCyOwNtZ5YrRqUXd2EW7uxiv_NIWR5Zr7Y&q=Franchard, Fontaineb1 Route de l'Ermitage, 77300 Fontainebleauleau&language=${state.langue}`}
                allowfullscreen
              />
            </StyledFlexBox>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="LDEvent.box2Title" />
            </StyledH3>
            <StyledTrackGrid flexDirection="row" justifyContent="space-around">
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="LDEvent.box2TrackTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Track1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Track2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Track3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="LDEvent.box2CategoriesTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Categories1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Categories2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Categories3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="LDEvent.box2DistanceTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Distance1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Distance2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Distance3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="LDEvent.box2HeightDifferenceTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2HeightDifference1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2HeightDifference2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2HeightDifference3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="LDEvent.box2ControlTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Control1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Control2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2Control3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="LDEvent.box2WinningTimeTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2WinningTime1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2WinningTime2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="LDEvent.box2WinningTime3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
            </StyledTrackGrid>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="LDEvent.box3Title" />
            </StyledH3>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="LDEvent.box3Paragraph11" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="LDEvent.box3Paragraph12" />
              </StyledSpan>
            </StyledParagraph>
            <br />
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="LDEvent.box3Paragraph21" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="LDEvent.box3Paragraph22" />
              </StyledSpan>
            </StyledParagraph>
            <br />
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="LDEvent.box3Paragraph31" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="LDEvent.box3Paragraph32" />
              </StyledSpan>
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="LDEvent.box4Title" />
            </StyledH3>
            <StyledMapExtract id="mapExtracts">
              <StyledFlexBox>
                <StyledImg src={franchard1} alt={franchard1} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={franchard2} alt={franchard2} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={franchard7} alt={franchard7} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={franchard10} alt={franchard10} />
              </StyledFlexBox>
            </StyledMapExtract>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}
const mapStateToProps = state => ({ langue: state.language });
export default connect(mapStateToProps)(LongDistance);
