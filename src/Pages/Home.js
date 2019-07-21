import React, { Component } from 'react';
import Page from '../Logic/Page';
import Translator from '../Logic/Translator';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledSection from '../styledComponents/StyledSection';
import StyledBackground from '../styledComponents/StyledBackground';

class Home extends Component {
  render() {
    return (
      <Page>
        <StyledBackground />
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
