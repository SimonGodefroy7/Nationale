import React, { Component } from "react";
import { Helmet } from "react-helmet";
import YouTube from "react-youtube";
import { connect } from "react-redux";
import Page from "../Logic/Page";
import Link from "../Logic/Link";
import StyledH1 from "../styledComponents/StyledH1";
import StyledSection from "../styledComponents/StyledSection";
import StyledAnchor from "../styledComponents/StyledAnchor";
import StyledH3 from "../styledComponents/StyledH3";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledFlexBox from "../styledComponents/StyledFlexBox";
import StyledSpan from "../styledComponents/StyledSpan";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledHero from "../styledComponents/StyledHero";
import StyledHeroHeadline from "../styledComponents/StyledHeroHeadline";
import StyledPracticalInfo from "../styledComponents/StyledPracticalInfo";
import StyledTable from "../styledComponents/StyledTable";
import StyledTr from "../styledComponents/StyledTr";
import StyledTd from "../styledComponents/StyledTd";
import StyledMapExtract from "../styledComponents/StyledMapExtract";
import StyledImg from "../styledComponents/StyledImg";
import Translator from "../Logic/Translator";
import style from "../styledComponents/style";
import salamandre1 from "../image/MapExtract/Salamandre1Small.png";
import salamandre2 from "../image/MapExtract/Salamandre2Small.png";
import salamandre3 from "../image/MapExtract/Salamandre3Small.png";
import mobileSBackground from "../image/Background/MobileS.jpg";
import mobileMBackground from "../image/Background/MobileM.jpg";
import mobileLBackground from "../image/Background/MobileL.jpg";
import tabletBackground from "../image/Background/Tablet.jpg";
import laptopBackground from "../image/Background/Laptop.jpg";
import laptopLBackground from "../image/Background/LaptopL.jpg";
import desktopBackground from "../image/Background/Desktop.jpg";
import salamandre from "../image/salamandre3_2017.jpg";
import mdArena from "../image/franchard arena MD.jpg";

class MiddleDistance extends Component {
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
          <title>Moyenne Distance | Nationale Nord Ouest 2020</title>
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
              <Translator id="MDEvent.bacgroundParagraph" />
            </StyledH1>
          </StyledHeroHeadline>
        </StyledHero>
        <StyledSection justify>
          <StyledH1>
            <Translator id="MDEvent.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="MDEvent.lastUpate" />
          </StyledSpan>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Home.trailer" />
            </StyledH3>
            <YouTube
              videoId="PNRaYGIa6p8"
              containerClassName="youtubeContainer"
            />
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="MDEvent.box1Title" />
            </StyledH3>
            <StyledPracticalInfo>
              <StyledFlexBox>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1DateTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1DateParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1StartListTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <StyledAnchor as={Link} to="liste-de-depart#MD">
                      <Translator id="MDEvent.box1StartListParagraph" />
                    </StyledAnchor>
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1ResultTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1ResultParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1ParkHomeDistanceTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1ParkHomeDistanceParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1HomeStartDistanceTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1HomeStartDistanceParagraph" />
                  </StyledSpan>
                </StyledParagraph>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1OfficialBookTitle" />
                  </StyledSpan>
                  <StyledAnchor
                    as={Link}
                    to="/download/LIVRET ACCUEIL NATIONALES CDCO77.pdf"
                    target="_blank"
                  >
                    <StyledSpan>
                      <Translator id="MDEvent.box1OfficialBookParagraph" />
                    </StyledSpan>
                  </StyledAnchor>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1RaceAnnouncementTitle" />
                  </StyledSpan>
                  <StyledAnchor
                    as={Link}
                    to="/download/MD PDF.pdf"
                    target="_blank"
                  >
                    <StyledSpan>
                      <Translator id="MDEvent.box1RaceAnnouncementParagraph" />
                    </StyledSpan>
                  </StyledAnchor>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1TrackDirectorTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1TrackDirectorParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="MDEvent.box1PlacesTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1PlacesParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1MapTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1MapParagraph" />
                  </StyledSpan>
                </StyledParagraph>
              </StyledFlexBox>
            </StyledPracticalInfo>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>Arena</StyledH3>
            <StyledFlexBox>
              <StyledImg src={mdArena} alt={mdArena} imageWidth="100%" />
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
              <Translator id="MDEvent.box2Title" />
            </StyledH3>
            <StyledTable>
              <thead>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2TrackTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2CategoriesTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2SizeTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2DistanceTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifferenceTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2ControlTitle" />
                  </StyledTd>
                </StyledTr>
              </thead>
              <tbody>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control1" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control2" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories31" />
                    <br />
                    <Translator id="MDEvent.box2Categories32" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size31" />
                    <br />
                    <Translator id="MDEvent.box2Size32" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control3" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories41" />
                    <br />
                    <Translator id="MDEvent.box2Categories42" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size41" />
                    <br />
                    <Translator id="MDEvent.box2Size42" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control4" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories51" />
                    <br />
                    <Translator id="MDEvent.box2Categories52" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size51" />
                    <br />
                    <Translator id="MDEvent.box2Size52" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control5" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories61" />
                    <br />
                    <Translator id="MDEvent.box2Categories62" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size61" />
                    <br />
                    <Translator id="MDEvent.box2Size62" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control6" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control7" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control8" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control9" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control10" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control11" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control12" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control13" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories141" />
                    <br />
                    <Translator id="MDEvent.box2Categories142" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size141" />
                    <br />
                    <Translator id="MDEvent.box2Size142" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control14" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control15" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control16" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control17" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control18" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control19" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track20" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories201" />
                    <br />
                    <Translator id="MDEvent.box2Categories202" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size201" />
                    <br />
                    <Translator id="MDEvent.box2Size202" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance20" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference20" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control20" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track21" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories21" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size21" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance21" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference21" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control21" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control22" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track23" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories23" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size23" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance23" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference23" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control23" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track24" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories24" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size24" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance24" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference24" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control24" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track25" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories25" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size25" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance25" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference25" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control25" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track26" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories26" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size26" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance26" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference26" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control26" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="MDEvent.box2Track27" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Categories27" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Size27" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Distance27" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2HeightDifference27" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="MDEvent.box2Control27" />
                  </StyledTd>
                </StyledTr>
              </tbody>
            </StyledTable>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="MDEvent.box3Title" />
            </StyledH3>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="MDEvent.box3Paragraph11" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="MDEvent.box3Paragraph12" />
              </StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="MDEvent.box3Paragraph21" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="MDEvent.box3Paragraph22" />
              </StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="MDEvent.box3Paragraph31" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="MDEvent.box3Paragraph32" />
              </StyledSpan>
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="MDEvent.box4Title" />
            </StyledH3>
            <StyledMapExtract>
              <StyledFlexBox id="mapExtracts">
                <StyledImg src={salamandre1} alt={salamandre1} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={salamandre2} alt={salamandre2} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={salamandre3} alt={salamandre3} />
              </StyledFlexBox>
            </StyledMapExtract>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="LDEvent.box5Title" />
            </StyledH3>
            <StyledAnchor href={salamandre} target="_blank">
              <StyledImg src={salamandre} alt={salamandre} imageWidth="100%" />
            </StyledAnchor>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({ langue: state.language });
export default connect(mapStateToProps)(MiddleDistance);
