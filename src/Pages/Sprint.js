import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
        <StyledSection>
          <StyledH1>
            <Translator id="SprintEvent.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="SprintEvent.lastUpate" />
          </StyledSpan>
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
                    <Translator id="SprintEvent.box1StartListParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="SprintEvent.box1ResultTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="SprintEvent.box1ResultParagraph" />
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
                  <StyledSpan>
                    <Translator id="SprintEvent.box1OfficialBookParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="SprintEvent.box1RaceAnnouncementTitle" />
                  </StyledSpan>
                  <StyledAnchor
                    as={Link}
                    to="/download/SPRINT PDF.pdf"
                    target="_blank"
                    download
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
            <StyledH3>
              <Translator id="SprintEvent.box1PlanTitle" />
            </StyledH3>
            <StyledFlexBox alignItems="center">
              <iframe
                title="plan"
                width={iFrameWidth}
                height={iFrameHeight}
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCyOwNtZ5YrRqUXd2EW7uxiv_NIWR5Zr7Y&q=Château-Landon&language=${state.langue}`}
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
                  <StyledTd>
                    <Translator id="SprintEvent.box2WinningTimeTitle" />
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
                  <StyledTd>
                    <Translator id="SprintEvent.box2WinningTime1" />
                  </StyledTd>
                </StyledTr>
                <StyledTr>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Track2" />
                  </StyledTd>
                  <StyledTd>
                    <Translator id="SprintEvent.box2Categories2" />
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
                  <StyledTd>
                    <Translator id="SprintEvent.box2WinningTime2" />
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
                  <StyledTd>
                    <Translator id="SprintEvent.box2WinningTime3" />
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

const mapStateToProps = state => ({ langue: state.language });
export default connect(mapStateToProps)(Sprint);
