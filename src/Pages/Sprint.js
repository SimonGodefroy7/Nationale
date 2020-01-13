import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledSection from '../styledComponents/StyledSection';
import StyledH3 from '../styledComponents/StyledH3';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledHero from '../styledComponents/StyledHero';
import StyledHeroHeadline from '../styledComponents/StyledHeroHeadline';
import Translator from '../Logic/Translator';

class Sprint extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Compétitions | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
        <StyledHero>
          <StyledHeroHeadline>
            <StyledH1><Translator id="SprintEvent.bacgroundParagraph" /></StyledH1>
          </StyledHeroHeadline>
        </StyledHero>
        <StyledSection>
          <StyledH1><Translator id="SprintEvent.title" /></StyledH1>
          <StyledBorderBox>
            <StyledH3><Translator id="SprintEvent.box1Title" /></StyledH3>
            <StyledParagraph><Translator id="SprintEvent.box1Paragraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="SprintEvent.box2Title" /></StyledH3>
            <StyledParagraph><Translator id="SprintEvent.box2Paragraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="SprintEvent.box3Title" /></StyledH3>
            <StyledParagraph><Translator id="SprintEvent.box3Paragraph" /></StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Sprint;
