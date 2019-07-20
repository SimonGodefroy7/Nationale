import React, { Component } from 'react'; //eslint-disable-line no-unused-vars
import Page from '../Logic/Page'; //eslint-disable-line no-unused-vars
import StyledH1 from '../styledComponents/StyledH1'; //eslint-disable-line no-unused-vars
import StyledParagraph from '../styledComponents/StyledParagraph'; //eslint-disable-line no-unused-vars
import StyledAnchor from '../styledComponents/StyledAnchor'; //eslint-disable-line no-unused-vars

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
