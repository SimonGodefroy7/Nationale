import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import YouTube from "react-youtube";
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
import StyledTable from "../styledComponents/StyledTable";
import StyledTr from "../styledComponents/StyledTr";
import StyledTd from "../styledComponents/StyledTd";
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
import franchard from "../image/Franchard2001svg.jpg";
import ldArena from "../image/franchard arena nationale.jpg";

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
        <StyledSection justify>
          <StyledH1>
            <Translator id="LDEvent.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="LDEvent.lastUpate" />
          </StyledSpan>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Home.trailer" />
            </StyledH3>
            <YouTube
              videoId="MseJOL5k-e8"
              containerClassName="youtubeContainer"
            />
          </StyledBorderBox>
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
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1StartListTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1StartListParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1ResultTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1ResultParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1ParkHomeDistanceTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1ParkHomeDistanceParagraph" />
                  </StyledSpan>
                </StyledParagraph>
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
                  <StyledAnchor
                    as={Link}
                    to="/download/LIVRET ACCUEIL NATIONALES CDCO77.pdf"
                    target="_blank"
                    download
                  >
                    <StyledSpan>
                      <Translator id="LDEvent.box1OfficialBookParagraph" />
                    </StyledSpan>
                  </StyledAnchor>
                </StyledParagraph>
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
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1TrackDirectorTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1TrackDirectorParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="LDEvent.box1PlacesTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1PlacesParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="LDEvent.box1MapTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="LDEvent.box1MapParagraph" />
                  </StyledSpan>
                </StyledParagraph>
              </StyledFlexBox>
            </StyledPracticalInfo>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>Arena</StyledH3>
            <StyledFlexBox>
              <StyledImg src={ldArena} alt={ldArena} imageWidth="100%" />
            </StyledFlexBox>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="MDEvent.box1SignPostingTitle" />
            </StyledH3>
            <StyledFlexBox alignItems="center">
              <iframe
                title="plan"
                width={iFrameWidth}
                height={iFrameHeight}
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCyOwNtZ5YrRqUXd2EW7uxiv_NIWR5Zr7Y&q=48.408572, 2.686493&language=${state.langue}`}
                allowFullScreen
              />
            </StyledFlexBox>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="LDEvent.box2Title" />
            </StyledH3>
            <StyledTable>
              <thead>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2TrackTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2CategoriesTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2SizeTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2DistanceTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifferenceTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2ControlTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTimeTitle" />
                  </StyledTd>
                </StyledTr>
              </thead>
              <tbody>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime1" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime2" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime3" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime4" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime5" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime6" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime7" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories81" />
                    <br />
                    <Translator id="LDEvent.box2Categories82" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size81" />
                    <br />
                    <Translator id="LDEvent.box2Size82" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime81" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime82" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories91" />
                    <br />
                    <Translator id="LDEvent.box2Categories92" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size91" />
                    <br />
                    <Translator id="LDEvent.box2Size92" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime91" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime92" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime10" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories111" />
                    <br />
                    <Translator id="LDEvent.box2Categories112" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size111" />
                    <br />
                    <Translator id="LDEvent.box2Size112" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime111" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime112" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories121" />
                    <br />
                    <Translator id="LDEvent.box2Categories122" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size121" />
                    <br />
                    <Translator id="LDEvent.box2Size122" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime121" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime122" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories131" />
                    <br />
                    <Translator id="LDEvent.box2Categories132" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size131" />
                    <br />
                    <Translator id="LDEvent.box2Size132" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime131" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime132" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories141" />
                    <br />
                    <Translator id="LDEvent.box2Categories142" />
                    <br />
                    <Translator id="LDEvent.box2Categories143" />
                    <br />
                    <Translator id="LDEvent.box2Categories144" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size141" />
                    <br />
                    <Translator id="LDEvent.box2Size142" />
                    <br />
                    <Translator id="LDEvent.box2Size143" />
                    <br />
                    <Translator id="LDEvent.box2Size144" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime141" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime142" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime143" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime144" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime15" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories161" />
                    <br />
                    <Translator id="LDEvent.box2Categories162" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size161" />
                    <br />
                    <Translator id="LDEvent.box2Size162" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime161" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime162" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime17" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories181" />
                    <br />
                    <Translator id="LDEvent.box2Categories182" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size181" />
                    <br />
                    <Translator id="LDEvent.box2Size182" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime181" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime182" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories191" />
                    <br />
                    <Translator id="LDEvent.box2Categories192" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size191" />
                    <br />
                    <Translator id="LDEvent.box2Size192" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime191" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime192" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track20" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories20" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size20" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance20" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference20" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control20" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime20" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track21" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories21" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size21" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance21" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference21" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control21" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime21" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime22" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track23" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories23" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size23" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Distance23" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2HeightDifference23" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Control23" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2WinningTime23" />
                  </StyledTd>
                </StyledTr>
              </tbody>
            </StyledTable>
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
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="LDEvent.box3Paragraph21" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="LDEvent.box3Paragraph22" />
              </StyledSpan>
            </StyledParagraph>
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
          <StyledBorderBox>
            <StyledH3>
              <Translator id="LDEvent.box5Title" />
            </StyledH3>
            <StyledAnchor href={franchard} target="_blank">
              <StyledImg src={franchard} alt={franchard} imageWidth="100%" />
            </StyledAnchor>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}
const mapStateToProps = state => ({ langue: state.language });
export default connect(mapStateToProps)(LongDistance);
