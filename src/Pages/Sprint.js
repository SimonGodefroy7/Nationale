import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledSection from '../styledComponents/StyledSection';
import StyledH3 from '../styledComponents/StyledH3';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledSpan from '../styledComponents/StyledSpan';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledHero from '../styledComponents/StyledHero';
import StyledTrackGrid from '../styledComponents/StyledTrackGrid';
import StyledHeroHeadline from '../styledComponents/StyledHeroHeadline';
import StyledPracticalInfo from '../styledComponents/StyledPracticalInfo';
import Translator from '../Logic/Translator';

class Sprint extends Component {
  render() {
    let state = this.props;
    let isEnglish = state.langue === "en";
    return (
      <Page>
        <Helmet>
          <title>Sprint | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
        <StyledHero>
          <StyledHeroHeadline isEnglish={isEnglish}>
            <StyledH1><Translator id="SprintEvent.bacgroundParagraph" /></StyledH1>
          </StyledHeroHeadline>
        </StyledHero>
        <StyledSection>
          <StyledH1><Translator id="SprintEvent.title" /></StyledH1>
          <StyledBorderBox>
            <StyledH3><Translator id="SprintEvent.box1Title" /></StyledH3>
            <StyledPracticalInfo>
              <StyledFlexBox>
                <StyledParagraph><StyledSpan fontWeight="bold"><Translator id="SprintEvent.box1DateTitle" /></StyledSpan><StyledSpan><Translator id="SprintEvent.box1DateParagraph" /></StyledSpan></StyledParagraph><br/>
                <StyledParagraph><StyledSpan fontWeight="bold"><Translator id="SprintEvent.box1StartListTitle" /></StyledSpan><StyledSpan><Translator id="SprintEvent.box1StartListParagraph" /></StyledSpan></StyledParagraph><br/>
                <StyledParagraph><StyledSpan fontWeight="bold"><Translator id="SprintEvent.box1ResultTitle" /></StyledSpan><StyledSpan><Translator id="SprintEvent.box1ResultParagraph" /></StyledSpan></StyledParagraph><br/>
                <StyledParagraph><StyledSpan fontWeight="bold"><Translator id="SprintEvent.box1ParkHomeDistanceTitle" /></StyledSpan><StyledSpan><Translator id="SprintEvent.box1ParkHomeDistanceParagraph" /></StyledSpan></StyledParagraph><br/>
                <StyledParagraph><StyledSpan fontWeight="bold"><Translator id="SprintEvent.box1HomeStartDistanceTitle" /></StyledSpan><StyledSpan><Translator id="SprintEvent.box1HomeStartDistanceParagraph" /></StyledSpan></StyledParagraph><br/>
                <StyledParagraph><StyledSpan fontWeight="bold"><Translator id="SprintEvent.box1OfficialBookTitle" /></StyledSpan><StyledSpan><Translator id="SprintEvent.box1OfficialBookParagraph" /></StyledSpan></StyledParagraph>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledParagraph><StyledSpan fontWeight={"bold"}><Translator id="SprintEvent.box1PlacesTitle" /></StyledSpan><StyledSpan><Translator id="SprintEvent.box1PlacesParagraph" /></StyledSpan></StyledParagraph><br/>
                <StyledParagraph><StyledSpan fontWeight={"bold"}><Translator id="SprintEvent.box1PlanTitle" /></StyledSpan><StyledSpan><Translator id="SprintEvent.box1PlanParagraph" /></StyledSpan></StyledParagraph>
              </StyledFlexBox>
            </StyledPracticalInfo>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="SprintEvent.box2Title" /></StyledH3>
            <StyledTrackGrid flexDirection="row" justifyContent="space-around">
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledSpan fontWeight={"bold"}><Translator id="SprintEvent.box2TrackTitle" /></StyledSpan></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Track1" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Track2" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Track3" /></StyledParagraph></StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledSpan fontWeight={"bold"}><Translator id="SprintEvent.box2CategoriesTitle" /></StyledSpan></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Categories1" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Categories2" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Categories3" /></StyledParagraph></StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledSpan fontWeight={"bold"}><Translator id="SprintEvent.box2DistanceTitle" /></StyledSpan></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Distance1" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Distance2" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Distance3" /></StyledParagraph></StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledSpan fontWeight={"bold"}><Translator id="SprintEvent.box2HeightDifferenceTitle" /></StyledSpan></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2HeightDifference1" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2HeightDifference2" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2HeightDifference3" /></StyledParagraph></StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledSpan fontWeight={"bold"}><Translator id="SprintEvent.box2ControlTitle" /></StyledSpan></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Control1" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Control2" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2Control3" /></StyledParagraph></StyledFlexBox>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledSpan fontWeight={"bold"}><Translator id="SprintEvent.box2WinningTimeTitle" /></StyledSpan></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2WinningTime1" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2WinningTime2" /></StyledParagraph></StyledFlexBox>
                <StyledFlexBox margin="0.5rem"><StyledParagraph><Translator id="SprintEvent.box2WinningTime3" /></StyledParagraph></StyledFlexBox>
              </StyledFlexBox>
            </StyledTrackGrid>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>Tarif</StyledH3>
            <StyledParagraph>Bientôt disponible</StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="SprintEvent.box3Title" /></StyledH3>
            <StyledParagraph><Translator id="SprintEvent.box3Paragraph" /></StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

const mapStateToProps = state => ({ langue: state.language });
export default connect(mapStateToProps)(Sprint);