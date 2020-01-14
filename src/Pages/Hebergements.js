import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledSection from '../styledComponents/StyledSection';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledUl from '../styledComponents/StyledUl';
import StyledLi from '../styledComponents/StyledLi';
import StyledAnchor from '../styledComponents/StyledAnchor';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledH3 from '../styledComponents/StyledH3';
import Translator from '../Logic/Translator';

class Hebergements extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Hébergements | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
        <StyledSection>
          <StyledH1><Translator id="Accomodation.title" /></StyledH1>
          <StyledBorderBox>
            <StyledH3><Translator id="Accomodation.box1Title" /></StyledH3>
            <StyledParagraph><Translator id="Accomodation.box11Paragraph" /></StyledParagraph>
            <br/>
            <StyledParagraph><Translator id="Accomodation.box12Paragraph" /></StyledParagraph>
            <br/>
            <StyledParagraph><Translator id="Accomodation.box13Paragraph" /></StyledParagraph>
            <br/>
            <StyledParagraph><Translator id="Accomodation.box131Paragraph" /></StyledParagraph>
            <StyledParagraph><Translator id="Accomodation.box132Paragraph" /></StyledParagraph>
            <StyledParagraph><Translator id="Accomodation.box133Paragraph" /></StyledParagraph>
            <StyledParagraph><Translator id="Accomodation.box134Paragraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="Accomodation.box2Title" /></StyledH3>
            <StyledParagraph><Translator id="Accomodation.box2Paragraph" /></StyledParagraph>
            <br/>
            <StyledParagraph><Translator id="Accomodation.box21Paragraph" /></StyledParagraph>
            <StyledParagraph><Translator id="Accomodation.box22Paragraph" /></StyledParagraph>
            <StyledParagraph><Translator id="Accomodation.box23Paragraph" /></StyledParagraph>
            <StyledParagraph><Translator id="Accomodation.box24Paragraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledParagraph><Translator id="Accomodation.paragraph" /></StyledParagraph>
          <StyledUl>
            <StyledLi>
              <StyledAnchor href="https://www.fontainebleau-tourisme.com/fr/accueil/" textAlign="center"><Translator id="Accomodation.officeFontaineblau" /></StyledAnchor>
            </StyledLi>
            <StyledLi>
              <StyledAnchor href="http://www.ville-melun.fr/decouvrir-melun/office-de-tourisme" textAlign="center"><Translator id="Accomodation.officeMelun" /></StyledAnchor>
            </StyledLi>
            <StyledLi>
              <StyledAnchor href="https://www.tourisme-paysdenemours.fr/" textAlign="center"><Translator id="Accomodation.officeNemours" /></StyledAnchor>
            </StyledLi>
          </StyledUl>
        </StyledSection>
      </Page>
    );
  }
}

export default Hebergements;
