import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1HeaderTitle from '../styledComponents/StyledH1HeaderTitle';
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
          <StyledH1HeaderTitle><Translator id="Results.title" /></StyledH1HeaderTitle>
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
