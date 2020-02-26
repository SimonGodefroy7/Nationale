import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledAnchor from '../styledComponents/StyledAnchor';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

class Contact extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Contact | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
        <StyledSection>
          <StyledH1><Translator id="Contact.title" /></StyledH1>
          <StyledParagraph><Translator id="Contact.paragraph" /></StyledParagraph>
          <StyledFlexBox width="19rem">
            <StyledBorderBox>
              <StyledH3>Alain Guillon</StyledH3>
              <StyledParagraph>Mail:<StyledAnchor href="mailto:cdco77.helene@wanadoo.fr">cdco77.helene@wanadoo.fr</StyledAnchor></StyledParagraph>
            </StyledBorderBox>
            <StyledBorderBox>
              <StyledH3>Support</StyledH3>
              <StyledParagraph>Mail:<StyledAnchor href="mailto:nationaleno20@gmail.com">nationaleno20@gmail.com</StyledAnchor></StyledParagraph>
            </StyledBorderBox>
          </StyledFlexBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Contact;
