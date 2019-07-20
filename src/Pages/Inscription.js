import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledAnchor from '../styledComponents/StyledAnchor';

class Inscription extends Component {
  render() {
    return (
      <Page>
        <StyledH1>Inscriptions</StyledH1>
        <StyledParagraph>Les inscriptions vont être réalisé par le biais du site de la <StyledAnchor href="http://www.ffcorientation.fr/" textAlign="center">FFCO</StyledAnchor></StyledParagraph>
      </Page>
    );
  }
}

export default Inscription;
