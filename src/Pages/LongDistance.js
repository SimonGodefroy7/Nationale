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
                    to="/download/LIVRET ACCUEIL NATIONALES NO-CD77.pdf"
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
              <Translator id="LDEvent.box1PlanTitle" />
            </StyledH3>
            <StyledFlexBox alignItems="center">
              <iframe
                title="plan"
                width={iFrameWidth}
                height={iFrameHeight}
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCyOwNtZ5YrRqUXd2EW7uxiv_NIWR5Zr7Y&q=Franchard, Fontaineb1 Route de l'Ermitage, 77300 Fontainebleauleau&language=${state.langue}`}
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
                    <Translator id="LDEvent.box2Categories31" />
                    <br />
                    <Translator id="LDEvent.box2Categories32" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size31" />
                    <br />
                    <Translator id="LDEvent.box2Size32" />
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
                    <Translator id="LDEvent.box2WinningTime31" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime32" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories41" />
                    <br />
                    <Translator id="LDEvent.box2Categories42" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size41" />
                    <br />
                    <Translator id="LDEvent.box2Size42" />
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
                    <Translator id="LDEvent.box2WinningTime41" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime42" />
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
                    <Translator id="LDEvent.box2Categories61" />
                    <br />
                    <Translator id="LDEvent.box2Categories62" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size61" />
                    <br />
                    <Translator id="LDEvent.box2Size62" />
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
                    <Translator id="LDEvent.box2WinningTime61" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime62" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories71" />
                    <br />
                    <Translator id="LDEvent.box2Categories72" />
                    <br />
                    <Translator id="LDEvent.box2Categories73" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size71" />
                    <br />
                    <Translator id="LDEvent.box2Size72" />
                    <br />
                    <Translator id="LDEvent.box2Size73" />
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
                    <Translator id="LDEvent.box2WinningTime71" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime72" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime73" />
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
                    <br />
                    <Translator id="LDEvent.box2Categories93" />
                    <br />
                    <Translator id="LDEvent.box2Categories94" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size91" />
                    <br />
                    <Translator id="LDEvent.box2Size92" />
                    <br />
                    <Translator id="LDEvent.box2Size93" />
                    <br />
                    <Translator id="LDEvent.box2Size94" />
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
                    <br />
                    <Translator id="LDEvent.box2WinningTime93" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime94" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories101" />
                    <br />
                    <Translator id="LDEvent.box2Categories102" />
                    <br />
                    <Translator id="LDEvent.box2Categories103" />
                    <br />
                    <Translator id="LDEvent.box2Categories104" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size101" />
                    <br />
                    <Translator id="LDEvent.box2Size102" />
                    <br />
                    <Translator id="LDEvent.box2Size103" />
                    <br />
                    <Translator id="LDEvent.box2Size104" />
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
                    <Translator id="LDEvent.box2WinningTime101" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime102" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime103" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime104" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size11" />
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
                    <Translator id="LDEvent.box2WinningTime11" />
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
                    <Translator id="LDEvent.box2Categories13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size13" />
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
                    <Translator id="LDEvent.box2WinningTime13" />
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
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size141" />
                    <br />
                    <Translator id="LDEvent.box2Size142" />
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
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories151" />
                    <br />
                    <Translator id="LDEvent.box2Categories152" />
                    <br />
                    <Translator id="LDEvent.box2Categories153" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size151" />
                    <br />
                    <Translator id="LDEvent.box2Size152" />
                    <br />
                    <Translator id="LDEvent.box2Size153" />
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
                    <Translator id="LDEvent.box2WinningTime151" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime152" />
                    <br />
                    <Translator id="LDEvent.box2WinningTime153" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size16" />
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
                    <Translator id="LDEvent.box2WinningTime16" />
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
                    <Translator id="LDEvent.box2Categories18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size18" />
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
                    <Translator id="LDEvent.box2WinningTime18" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="LDEvent.box2Track19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Categories19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="LDEvent.box2Size19" />
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
                    <Translator id="LDEvent.box2WinningTime19" />
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
const mapStateToProps = (state) => ({ langue: state.language });
export default connect(mapStateToProps)(LongDistance);
