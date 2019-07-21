import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class Resultats extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1><Translator id="Results.title" /></StyledH1>
          <StyledBorderBox>
            <StyledH3><Translator id="Results.spTitle" /></StyledH3>
            <StyledParagraph><Translator id="Results.spParagraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="Results.mdTitle" /></StyledH3>
            <StyledParagraph><Translator id="Results.mdParagraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="Results.ldTitle" /></StyledH3>
            <StyledParagraph><Translator id="Results.ldParagraph" /></StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Resultats;
