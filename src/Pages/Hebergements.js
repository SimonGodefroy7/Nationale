import React, { Component } from 'react';
import Page from '../Logic/Page';
import StyledH1HeaderTitle from '../styledComponents/StyledH1HeaderTitle';
import StyledSection from '../styledComponents/StyledSection';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledUl from '../styledComponents/StyledUl';
import StyledLi from '../styledComponents/StyledLi';
import StyledAnchor from '../styledComponents/StyledAnchor';
import Translator from '../Logic/Translator';

class Hebergements extends Component {
  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1HeaderTitle><Translator id="Accomodation.title" /></StyledH1HeaderTitle>
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
