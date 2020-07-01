import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Page from "../Logic/Page";
import StyledH1 from "../styledComponents/StyledH1";
import StyledSection from "../styledComponents/StyledSection";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledUl from "../styledComponents/StyledUl";
import StyledLi from "../styledComponents/StyledLi";
import StyledAnchor from "../styledComponents/StyledAnchor";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledH3 from "../styledComponents/StyledH3";
import StyledSpan from "../styledComponents/StyledSpan";
import Translator from "../Logic/Translator";

class Hebergements extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Hébergements | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledSection>
          <StyledH1>
            <Translator id="Accomodation.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="Accomodation.lastUpate" />
          </StyledSpan>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Accomodation.box1Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Accomodation.box11Paragraph" />
            </StyledParagraph>
            <br />
            <StyledParagraph>
              <Translator id="Accomodation.box12Paragraph" />
            </StyledParagraph>
            <br />
            <StyledParagraph>
              <Translator id="Accomodation.box13Paragraph" />
            </StyledParagraph>
            <StyledUl>
              <StyledLi>
                <StyledAnchor href="http://www.boisdulys.com/">
                  Bois du Lys
                </StyledAnchor>
                (Dammarie-les-lys)
              </StyledLi>
              <StyledLi>
                <StyledAnchor href="http://www.base-de-buthiers.fr/">
                  Base de plein air et de loisir
                </StyledAnchor>
                (Buthiers)
              </StyledLi>
              <StyledLi>
                <StyledAnchor href="http://www.lafermedelavenir.com/">
                  La ferme de l'avenir
                </StyledAnchor>
                <Translator id="Accomodation.box131Paragraph" />
              </StyledLi>
            </StyledUl>
            <br />
            <StyledParagraph>
              <Translator id="Accomodation.box14Paragraph" />
            </StyledParagraph>
            <StyledUl>
              <StyledLi>
                <StyledAnchor href="https://www.gites-de-france.com/fr">
                  Gîtes de France
                </StyledAnchor>
              </StyledLi>
              <StyledLi>
                <StyledAnchor href="https://www.airbnb.fr/">
                  Airbnb
                </StyledAnchor>
              </StyledLi>
              <StyledLi>
                <StyledAnchor href="https://www.booking.com">
                  Booking.com
                </StyledAnchor>
              </StyledLi>
              <StyledLi>
                <StyledAnchor href="https://www.tripadvisor.fr/">
                  TripAdvisor
                </StyledAnchor>
              </StyledLi>
            </StyledUl>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Accomodation.box2Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Accomodation.box2Paragraph" />
            </StyledParagraph>
            <br />
            <StyledUl>
              <StyledLi>
                <StyledAnchor href="https://www.aquadis-loisirs.com/camping-les-pres-fontainebleau/">
                  Les Prés
                </StyledAnchor>
                <Translator id="Accomodation.box21Paragraph" />
              </StyledLi>
              <StyledLi>
                <StyledAnchor href="https://www.millylaforet-tourisme.com/fr/fiche/735909/camping-caravaning-la-musardiere/">
                  La musardière
                </StyledAnchor>
                <Translator id="Accomodation.box22Paragraph" />
              </StyledLi>
              <StyledLi>
                <StyledAnchor href="https://www.camping-iledeboulancourt.com/">
                  Ile de Boulancourt
                </StyledAnchor>
                <Translator id="Accomodation.box23Paragraph" />
              </StyledLi>
              <StyledLi>
                <StyledAnchor href="http://www.les-courtilles-du-lido.fr/">
                  Les courtilles du Lido
                </StyledAnchor>
                <Translator id="Accomodation.box24Paragraph" />
              </StyledLi>
            </StyledUl>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Accomodation.box3Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Accomodation.paragraph" />
            </StyledParagraph>
            <br />
            <StyledUl>
              <StyledLi>
                <StyledAnchor
                  href="https://www.fontainebleau-tourisme.com/fr/accueil/"
                  textAlign="center"
                >
                  <Translator id="Accomodation.officeFontaineblau" />
                </StyledAnchor>
              </StyledLi>
              <StyledLi>
                <StyledAnchor
                  href="https://www.melunvaldeseine-tourisme.com/"
                  textAlign="center"
                >
                  <Translator id="Accomodation.officeMelun" />
                </StyledAnchor>
              </StyledLi>
              <StyledLi>
                <StyledAnchor
                  href="https://www.tourisme-paysdenemours.fr/"
                  textAlign="center"
                >
                  <Translator id="Accomodation.officeNemours" />
                </StyledAnchor>
              </StyledLi>
            </StyledUl>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Hebergements;
