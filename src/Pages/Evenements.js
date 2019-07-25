import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class Evenements extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1><Translator id="Event.title" /></StyledH1>
          <StyledParagraph><Translator id="Event.paragraph1" /></StyledParagraph>
          <StyledParagraph><Translator id="Event.paragraph2" /></StyledParagraph>
          <StyledParagraph><Translator id="Event.paragraph3" /></StyledParagraph>
          <StyledParagraph><Translator id="Event.paragraph4" /></StyledParagraph>
          <StyledBorderBox>
            <StyledH3 id="Sprint"><Translator id="Event.event1Title" /></StyledH3>
            <StyledParagraph><Translator id="Event.event1Paragrpah" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3 id="Md"><Translator id="Event.event2Title" /></StyledH3>
            <StyledParagraph><Translator id="Event.event2Paragrpah" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3 id="Ld"><Translator id="Event.event3Title" /></StyledH3>
            <StyledParagraph><Translator id="Event.event3Paragrpah" /></StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Evenements;
