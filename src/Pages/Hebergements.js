import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class Hebergements extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1><Translator id="Accomodation.title" /></StyledH1>
        </StyledSection>
      </Page>
    );
  }
}

export default Hebergements;
