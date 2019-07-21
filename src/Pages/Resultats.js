import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledSection from '../styledComponents/StyledSection';

class Resultats extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1>Résultats</StyledH1>
          <StyledBorderBox>
            <StyledH3>Résultats du Sprint</StyledH3>
            <StyledParagraph>Pas encore disponible</StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>Résultats de la MD</StyledH3>
            <StyledParagraph>Pas encore disponible</StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>Résultats de la LD</StyledH3>
            <StyledParagraph>Pas encore disponible</StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Resultats;
