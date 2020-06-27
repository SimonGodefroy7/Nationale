import React, { Component } from "react";
import { Helmet } from "react-helmet";
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
import StyledTrackGrid from "../styledComponents/StyledTrackGrid";
import Translator from "../Logic/Translator";
import style from "../styledComponents/style";

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
        <StyledHero>
          <StyledHeroHeadline isEnglish={isEnglish} medium>
            <StyledH1>
              <Translator id="MDEvent.bacgroundParagraph" />
            </StyledH1>
          </StyledHeroHeadline>
        </StyledHero>
        <StyledSection>
          <StyledH1>
            <Translator id="MDEvent.title" />
          </StyledH1>
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
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1StartListTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1StartListParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1ResultTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1ResultParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1ParkHomeDistanceTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1ParkHomeDistanceParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
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
                  <StyledSpan>
                    <Translator id="MDEvent.box1OfficialBookParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1RaceAnnouncementTitle" />
                  </StyledSpan>
                  <StyledAnchor
                    as={Link}
                    to="/download/MD PDF.pdf"
                    target="_blank"
                    download
                  >
                    <StyledSpan>
                      <Translator id="MDEvent.box1RaceAnnouncementParagraph" />
                    </StyledSpan>
                  </StyledAnchor>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="MDEvent.box1TrackDirectorTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1TrackDirectorParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="MDEvent.box1PlacesTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="MDEvent.box1PlacesParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
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
            <StyledH3>
              <Translator id="MDEvent.box1PlanTitle" />
            </StyledH3>
            <StyledFlexBox alignItems="center">
              <iframe
                title="plan"
                width={iFrameWidth}
                height={iFrameHeight}
                frameborder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCyOwNtZ5YrRqUXd2EW7uxiv_NIWR5Zr7Y&q=48.408510, 2.639220&language=${state.langue}`}
                allowfullscreen
              />
            </StyledFlexBox>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="MDEvent.box2Title" />
            </StyledH3>
            <StyledTrackGrid flexDirection="row" justifyContent="space-around">
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="MDEvent.box2TrackTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Track1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Track2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Track3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="MDEvent.box2CategoriesTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Categories1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Categories2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Categories3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="MDEvent.box2DistanceTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Distance1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Distance2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Distance3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="MDEvent.box2HeightDifferenceTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2HeightDifference1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2HeightDifference2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2HeightDifference3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="MDEvent.box2ControlTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Control1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Control2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2Control3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="MDEvent.box2WinningTimeTitle" />
                  </StyledSpan>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2WinningTime1" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2WinningTime2" />
                  </StyledParagraph>
                </StyledFlexBox>
                <StyledFlexBox margin="0.5rem">
                  <StyledParagraph>
                    <Translator id="MDEvent.box2WinningTime3" />
                  </StyledParagraph>
                </StyledFlexBox>
              </StyledFlexBox>
            </StyledTrackGrid>
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
            <br />
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="MDEvent.box3Paragraph21" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="MDEvent.box3Paragraph22" />
              </StyledSpan>
            </StyledParagraph>
            <br />
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
            <StyledParagraph>
              <Translator id="MDEvent.box4Paragraph1" />
            </StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

const mapStateToProps = state => ({ langue: state.language });
export default connect(mapStateToProps)(MiddleDistance);
