import React, { Component } from 'react';
import Page from '../Logic/Page';
import Translator from '../Logic/Translator';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledSection from '../styledComponents/StyledSection';
import StyledBackground from '../styledComponents/StyledBackground';
import StyledTabletBox from '../styledComponents/StyledTabletBox';
import StyledBalise from '../styledComponents/StyledBalise';
import StyledBaliseBox from '../styledComponents/StyledBaliseBox';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledHashLink from '../styledComponents/StyledHashLink';

class Home extends Component {
  render() {
    return (
      <Page>
        <StyledBackground>
          <StyledTabletBox>
            <StyledH1><Translator id="Home.bacgroundParagraph" /></StyledH1>
          </StyledTabletBox>
          <StyledFlexBox flexDirection="row" justifyContent="space-between" width="80%">
            <StyledHashLink to="/evenements/#Sprint">
              <StyledBalise>
                <StyledH1><Translator id="Home.baliseSpTitle" /></StyledH1>
                <StyledBaliseBox>
                  <StyledParagraph><Translator id="Home.baliseSpParagraph1" /></StyledParagraph>
                  <StyledParagraph><Translator id="Home.baliseSpParagraph2" /></StyledParagraph>
                </StyledBaliseBox>
              </StyledBalise>
            </StyledHashLink>
            <StyledHashLink to="/evenements/#Ld">
              <StyledBalise>
                <StyledH1><Translator id="Home.baliseLdTitle" /></StyledH1>
                <StyledBaliseBox>
                  <StyledParagraph><Translator id="Home.baliseLdParagraph1" /></StyledParagraph>
                  <StyledParagraph><Translator id="Home.baliseLdParagraph2" /></StyledParagraph>
                </StyledBaliseBox>
              </StyledBalise>
            </StyledHashLink>
          </StyledFlexBox>
          <StyledFlexBox>
            <StyledHashLink to="/evenements/#Md">
              <StyledBalise>
                <StyledH1><Translator id="Home.baliseMdTitle" /></StyledH1>
                <StyledBaliseBox>
                  <StyledParagraph><Translator id="Home.baliseMdParagraph1" /></StyledParagraph>
                  <StyledParagraph><Translator id="Home.baliseMdParagraph2" /></StyledParagraph>
                </StyledBaliseBox>
              </StyledBalise>
            </StyledHashLink>
          </StyledFlexBox>
        </StyledBackground>
        <StyledSection>
          <StyledH1><Translator id="Home.title" /></StyledH1>
          <StyledBorderBox>
            <StyledH3><Translator id="Home.box1Title" /></StyledH3>
            <StyledParagraph><Translator id="Home.box1Paragraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="Home.box2Title" /></StyledH3>
            <StyledParagraph><Translator id="Home.box2Paragraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="Home.box3Title" /></StyledH3>
            <StyledParagraph><Translator id="Home.box3Paragraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="Home.box4Title" /></StyledH3>
            <StyledParagraph><Translator id="Home.box4Paragraph" /></StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Home;
