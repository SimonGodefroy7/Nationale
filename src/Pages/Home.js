import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledBorderBox from '../styledComponents/StyledBorderBox';

class Home extends Component {
  render() {
    return (
      <Page>
        <StyledH1>Acceuil</StyledH1>
        <StyledBorderBox>
          <StyledH3>Terrain</StyledH3>
          <StyledParagraph>bientôt dispoinible</StyledParagraph>
        </StyledBorderBox>
        <StyledBorderBox>
          <StyledH3>Zone gelée</StyledH3>
          <StyledParagraph>bientôt dispoinible</StyledParagraph>
        </StyledBorderBox>
        <StyledBorderBox>
          <StyledH3>Livret</StyledH3>
          <StyledParagraph>bientôt dispoinible</StyledParagraph>
        </StyledBorderBox>
        <StyledBorderBox>
          <StyledH3>Annonces</StyledH3>
          <StyledParagraph>bientôt dispoinible</StyledParagraph>
        </StyledBorderBox>
      </Page>
    );
  }
}

export default Home;
