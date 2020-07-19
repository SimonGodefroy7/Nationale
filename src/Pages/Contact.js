import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Page from "../Logic/Page";
import StyledH1 from "../styledComponents/StyledH1";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledAnchor from "../styledComponents/StyledAnchor";
import StyledSection from "../styledComponents/StyledSection";
import StyledSpan from "../styledComponents/StyledSpan";
import Translator from "../Logic/Translator";

class Contact extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Contact | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledSection>
          <StyledH1>
            <Translator id="Contact.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="Contact.lastUpate" />
          </StyledSpan>
          <StyledParagraph>
            <Translator id="Contact.paragraph" />
            <StyledSpan>
              <StyledAnchor href="mailto:nationaleno20@gmail.com">
                nationaleno20@gmail.com
              </StyledAnchor>
            </StyledSpan>
          </StyledParagraph>
        </StyledSection>
      </Page>
    );
  }
}

export default Contact;
