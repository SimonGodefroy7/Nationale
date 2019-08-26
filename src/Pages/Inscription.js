import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1HeaderTitle from '../styledComponents/StyledH1HeaderTitle';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledAnchor from '../styledComponents/StyledAnchor';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class Inscription extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1HeaderTitle><Translator id="Registration.title" /></StyledH1HeaderTitle>
          <StyledParagraph><Translator id="Registration.paragraph" /><StyledAnchor href="http://www.ffcorientation.fr/" textAlign="center">FFCO</StyledAnchor></StyledParagraph>
        </StyledSection>
      </Page>
    );
  }
}

export default Inscription;
