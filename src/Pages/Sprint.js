import React, { Component } from "react";
import { Helmet } from "react-helmet";
import YouTube from "react-youtube";
import { connect } from "react-redux";
import Page from "../Logic/Page";
import Link from "../Logic/Link";
import StyledH1 from "../styledComponents/StyledH1";
import StyledAnchor from "../styledComponents/StyledAnchor";
import StyledSection from "../styledComponents/StyledSection";
import StyledH3 from "../styledComponents/StyledH3";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledFlexBox from "../styledComponents/StyledFlexBox";
import StyledSpan from "../styledComponents/StyledSpan";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledHero from "../styledComponents/StyledHero";
import StyledTable from "../styledComponents/StyledTable";
import StyledTr from "../styledComponents/StyledTr";
import StyledTd from "../styledComponents/StyledTd";
import StyledHeroHeadline from "../styledComponents/StyledHeroHeadline";
import StyledPracticalInfo from "../styledComponents/StyledPracticalInfo";
import StyledMapExtract from "../styledComponents/StyledMapExtract";
import StyledImg from "../styledComponents/StyledImg";
import Translator from "../Logic/Translator";
import style from "../styledComponents/style";
import sprint from "../image/Background/Sprint.jpg";
import sprintMobileS from "../image/Background/SprintMobileS.jpg";
import sprintMobileM from "../image/Background/SprintMobileM.jpg";
import chateauLandon1 from "../image/MapExtract/ChateauLandon1Small.jpg";
import chateauLandon2 from "../image/MapExtract/ChateauLandon2Small.jpg";
import sprintArena from "../image/Chateau-Landon arena sprint.jpg";

class Sprint extends Component {
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
          <title>Sprint | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledHero
          backgroundImageMobileS={sprintMobileS}
          backgroundImageMobileM={sprintMobileS}
          backgroundImageMobileL={sprintMobileM}
          backgroundImageTablet={sprint}
          backgroundImageLaptop={sprint}
          backgroundImageLaptopL={sprint}
          backgroundImageDesktop={sprint}
          isPortrait
        >
          <StyledHeroHeadline isEnglish={isEnglish}>
            <StyledH1>
              <Translator id="SprintEvent.bacgroundParagraph" />
            </StyledH1>
          </StyledHeroHeadline>
        </StyledHero>
        <StyledSection justify>
          <StyledH1>
            <Translator id="SprintEvent.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="SprintEvent.lastUpate" />
          </StyledSpan>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Sprint.video" />
            </StyledH3>
            <YouTube
              videoId="mymuA1EzdrQ"
              containerClassName="youtubeContainer"
            />
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Home.trailer" />
            </StyledH3>
            <YouTube
              videoId="UHCBQQrDKAw"
              containerClassName="youtubeContainer"
            />
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="SprintEvent.box1Title" />
            </StyledH3>
            <StyledPracticalInfo>
              <StyledFlexBox>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="SprintEvent.box1DateTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="SprintEvent.box1DateParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="SprintEvent.box1StartListTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <StyledAnchor as={Link} to="liste-de-depart#Sprint">
                      <Translator id="SprintEvent.box1StartListParagraph" />
                    </StyledAnchor>
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="SprintEvent.box1ResultTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <StyledAnchor as={Link} to="resultats#Sprint">
                      <Translator id="SprintEvent.box1ResultParagraph" />
                    </StyledAnchor>
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="SprintEvent.box1ParkHomeDistanceTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="SprintEvent.box1ParkHomeDistanceParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="SprintEvent.box1HomeStartDistanceTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="SprintEvent.box1HomeStartDistanceParagraph" />
                  </StyledSpan>
                </StyledParagraph>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="SprintEvent.box1OfficialBookTitle" />
                  </StyledSpan>
                  <StyledAnchor
                    as={Link}
                    to="/download/LIVRET ACCUEIL NATIONALES CDCO77.pdf"
                    target="_blank"
                  >
                    <StyledSpan>
                      <Translator id="SprintEvent.box1OfficialBookParagraph" />
                    </StyledSpan>
                  </StyledAnchor>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="SprintEvent.box1RaceAnnouncementTitle" />
                  </StyledSpan>
                  <StyledAnchor
                    as={Link}
                    to="/download/SPRINT PDF.pdf"
                    target="_blank"
                  >
                    <StyledSpan>
                      <Translator id="SprintEvent.box1RaceAnnouncementParagraph" />
                    </StyledSpan>
                  </StyledAnchor>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="SprintEvent.box1TrackDirectorTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="SprintEvent.box1TrackDirectorParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="SprintEvent.box1PlacesTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="SprintEvent.box1PlacesParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="SprintEvent.box1MapTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="SprintEvent.box1MapParagraph" />
                  </StyledSpan>
                </StyledParagraph>
              </StyledFlexBox>
            </StyledPracticalInfo>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>Arena</StyledH3>
            <StyledFlexBox>
              <StyledImg
                src={sprintArena}
                alt={sprintArena}
                imageWidth="100%"
              />
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
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCyOwNtZ5YrRqUXd2EW7uxiv_NIWR5Zr7Y&q=48.147227, 2.763829&language=${state.langue}`}
                allowFullScreen
              />
            </StyledFlexBox>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="SprintEvent.box2Title" />
            </StyledH3>
            <StyledTable>
              <thead>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2TrackTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2CategoriesTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2SizeTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2DistanceTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifferenceTitle" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2ControlTitle" />
                  </StyledTd>
                </StyledTr>
              </thead>
              <tbody>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference1" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control1" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories21" />
                    <br />
                    <Translator id="SprintEvent.box2Categories22" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control2" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference3" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control3" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference4" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control4" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories51" />
                    <br />
                    <Translator id="SprintEvent.box2Categories52" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference5" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control5" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories61" />
                    <br />
                    <Translator id="SprintEvent.box2Categories62" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference6" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control6" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories71" />
                    <br />
                    <Translator id="SprintEvent.box2Categories72" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference7" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control7" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference8" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control8" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories91" />
                    <br />
                    <Translator id="SprintEvent.box2Categories92" />
                    <br />
                    <Translator id="SprintEvent.box2Categories93" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference9" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control9" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories101" />
                    <br />
                    <Translator id="SprintEvent.box2Categories102" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference10" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control10" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference11" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control11" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories121" />
                    <br />
                    <Translator id="SprintEvent.box2Categories122" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference12" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control12" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference13" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control13" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference14" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control14" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories151" />
                    <br />
                    <Translator id="SprintEvent.box2Categories152" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference15" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control15" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference16" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control16" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference17" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control17" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference18" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control18" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Size19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Distance19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2HeightDifference19" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Control19" />
                  </StyledTd>
                </StyledTr>
              </tbody>
            </StyledTable>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="SprintEvent.box3Title" />
            </StyledH3>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="SprintEvent.box3Paragraph11" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="SprintEvent.box3Paragraph12" />
              </StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="SprintEvent.box3Paragraph21" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="SprintEvent.box3Paragraph22" />
              </StyledSpan>
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="SprintEvent.box3Paragraph31" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="SprintEvent.box3Paragraph32" />
              </StyledSpan>
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="SprintEvent.box4Title" />
            </StyledH3>
            <StyledMapExtract id="mapExtracts">
              <StyledFlexBox>
                <StyledImg src={chateauLandon1} alt={chateauLandon1} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={chateauLandon2} alt={chateauLandon2} />
              </StyledFlexBox>
            </StyledMapExtract>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({ langue: state.language });
export default connect(mapStateToProps)(Sprint);
