import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Page from "../Logic/Page";
import StyledH1 from "../styledComponents/StyledH1";
import StyledSection from "../styledComponents/StyledSection";
import StyledParagraph from "../styledComponents/StyledParagraph";
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
            <ul>
              <li>
                <StyledParagraph>
                  <StyledSpan>
                    <StyledAnchor href="http://www.boisdulys.com/">
                      Bois du Lys
                    </StyledAnchor>
                  </StyledSpan>
                  <StyledSpan> (Dammarie-les-lys)</StyledSpan>
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph>
                  <StyledSpan>
                    <StyledAnchor href="http://www.base-de-buthiers.fr/">
                      Base de plein air et de loisir
                    </StyledAnchor>
                  </StyledSpan>
                  <StyledSpan> (Buthiers)</StyledSpan>
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph>
                  <StyledSpan>
                    <StyledAnchor href="http://www.lafermedelavenir.com/">
                      La ferme de l'avenir
                    </StyledAnchor>
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="Accomodation.box131Paragraph" />
                  </StyledSpan>
                </StyledParagraph>
              </li>
            </ul>
            <StyledParagraph>
              <Translator id="Accomodation.box14Paragraph" />
            </StyledParagraph>
            <ul>
              <li>
                <StyledAnchor href="https://www.gites-de-france.com/fr">
                  Gîtes de France
                </StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="https://www.airbnb.fr/">
                  Airbnb
                </StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="https://www.booking.com">
                  Booking.com
                </StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="https://www.tripadvisor.fr/">
                  TripAdvisor
                </StyledAnchor>
              </li>
            </ul>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Accomodation.box2Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Accomodation.box2Paragraph" />
            </StyledParagraph>
            <ul>
              <li>
                <StyledParagraph>
                  <StyledSpan>
                    <StyledAnchor href="https://www.aquadis-loisirs.com/camping-les-pres-fontainebleau/">
                      Les Prés
                    </StyledAnchor>
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="Accomodation.box21Paragraph" />
                  </StyledSpan>
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph>
                  <StyledSpan>
                    <StyledAnchor href="https://www.millylaforet-tourisme.com/fr/fiche/735909/camping-caravaning-la-musardiere/">
                      La musardière
                    </StyledAnchor>
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="Accomodation.box22Paragraph" />
                  </StyledSpan>
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph>
                  <StyledSpan>
                    <StyledAnchor href="https://www.camping-iledeboulancourt.com/">
                      Ile de Boulancourt
                    </StyledAnchor>
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="Accomodation.box23Paragraph" />
                  </StyledSpan>
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph>
                  <StyledSpan>
                    <StyledAnchor href="http://www.les-courtilles-du-lido.fr/">
                      Les courtilles du Lido
                    </StyledAnchor>
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="Accomodation.box24Paragraph" />
                  </StyledSpan>
                </StyledParagraph>
              </li>
            </ul>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Accomodation.box3Title" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Accomodation.paragraph" />
            </StyledParagraph>
            <ul>
              <li>
                <StyledAnchor
                  href="https://www.fontainebleau-tourisme.com/fr/accueil/"
                  textAlign="center"
                >
                  <Translator id="Accomodation.officeFontaineblau" />
                </StyledAnchor>
              </li>
              <li>
                <StyledAnchor
                  href="https://www.melunvaldeseine-tourisme.com/"
                  textAlign="center"
                >
                  <Translator id="Accomodation.officeMelun" />
                </StyledAnchor>
              </li>
              <li>
                <StyledAnchor
                  href="https://www.tourisme-paysdenemours.fr/"
                  textAlign="center"
                >
                  <Translator id="Accomodation.officeNemours" />
                </StyledAnchor>
              </li>
            </ul>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Hebergements;
