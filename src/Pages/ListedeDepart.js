import React, { Component } from 'react'; //eslint-disable-line no-unused-vars
import Page from '../Logic/Page'; //eslint-disable-line no-unused-vars
import StyledH1 from '../styledComponents/StyledH1'; //eslint-disable-line no-unused-vars
import StyledH3 from '../styledComponents/StyledH3'; //eslint-disable-line no-unused-vars
import StyledParagraph from '../styledComponents/StyledParagraph'; //eslint-disable-line no-unused-vars
import StyledBorderBox from '../styledComponents/StyledBorderBox'; //eslint-disable-line no-unused-vars

class ListeDeDepartResultats extends Component {
  render() {
    return (
      <Page>
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
      </Page>
    );
  }
}

export default ListeDeDepartResultats;
