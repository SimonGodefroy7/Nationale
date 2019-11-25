import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class ListeDeDepartResultats extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Liste de départ | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
        <StyledSection>
          <StyledH1><Translator id="StartList.title" /></StyledH1>
          <StyledBorderBox>
            <StyledH3><Translator id="StartList.spTitle" /></StyledH3>
            <StyledParagraph><Translator id="StartList.spParagraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="StartList.mdTitle" /></StyledH3>
            <StyledParagraph><Translator id="StartList.mdParagraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="StartList.ldTitle" /></StyledH3>
            <StyledParagraph><Translator id="StartList.ldParagraph" /></StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default ListeDeDepartResultats;
