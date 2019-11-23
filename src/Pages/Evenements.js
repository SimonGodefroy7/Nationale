import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Page from '../Logic/Page';
import StyledH1HeaderTitle from '../styledComponents/StyledH1HeaderTitle';
import StyledH3 from '../styledComponents/StyledH3';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class Evenements extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Compétitions | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
        <StyledSection>
          <StyledH1HeaderTitle><Translator id="Event.title" /></StyledH1HeaderTitle>
          <StyledParagraph><Translator id="Event.paragraph1" /></StyledParagraph>
          <StyledParagraph><Translator id="Event.paragraph2" /></StyledParagraph>
          <StyledParagraph><Translator id="Event.paragraph3" /></StyledParagraph>
          <StyledParagraph><Translator id="Event.paragraph4" /></StyledParagraph>
          <StyledBorderBox>
            <StyledH3 id="Sprint"><Translator id="Event.event1Title" /></StyledH3>
            <StyledParagraph><Translator id="Event.event1Paragrpah" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3 id="Md"><Translator id="Event.event2Title" /></StyledH3>
            <StyledParagraph><Translator id="Event.event2Paragrpah" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3 id="Ld"><Translator id="Event.event3Title" /></StyledH3>
            <StyledParagraph><Translator id="Event.event3Paragrpah" /></StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Evenements;
