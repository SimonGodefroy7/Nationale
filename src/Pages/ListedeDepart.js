import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledSection from '../styledComponents/StyledSection';

class ListeDeDepartResultats extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1>Listes de départ</StyledH1>
          <StyledBorderBox>
            <StyledH3>Liste de départ du Sprint</StyledH3>
            <StyledParagraph>Pas encore disponible</StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>Liste de départ de la MD</StyledH3>
            <StyledParagraph>Pas encore disponible</StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>Liste de départ de la LD</StyledH3>
            <StyledParagraph>Pas encore disponible</StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default ListeDeDepartResultats;
