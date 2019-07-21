import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledAnchor from '../styledComponents/StyledAnchor';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class Inscription extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1><Translator id="Registration.title" /></StyledH1>
          <StyledParagraph><Translator id="Registration.paragraph" /><StyledAnchor href="http://www.ffcorientation.fr/" textAlign="center">FFCO</StyledAnchor></StyledParagraph>
        </StyledSection>
      </Page>
    );
  }
}

export default Inscription;
