import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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
        <Helmet>
          <title>Résultats | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
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
