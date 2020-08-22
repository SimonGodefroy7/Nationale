import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Page from "../Logic/Page";
import Link from "../Logic/Link";
import StyledH1 from "../styledComponents/StyledH1";
import StyledH3 from "../styledComponents/StyledH3";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledSection from "../styledComponents/StyledSection";
import StyledSpan from "../styledComponents/StyledSpan";
import StyledAnchor from "../styledComponents/StyledAnchor";
import Translator from "../Logic/Translator";

class Resultats extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Résultats | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledSection justify>
          <StyledH1>
            <Translator id="Results.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="Results.lastUpate" />
          </StyledSpan>
          <StyledBorderBox>
            <StyledParagraph>
              <StyledSpan>
                <Translator id="Results.paragraph1" />
              </StyledSpan>
              <StyledSpan>
                <StyledAnchor href="http://cdco77.free.fr/">
                  <Translator id="Results.paragraph2" />
                </StyledAnchor>
              </StyledSpan>
              <StyledSpan>
                <Translator id="Results.paragraph3" />
              </StyledSpan>
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox id="Sprint">
            <StyledH3>
              <Translator id="Results.spTitle" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Results.spParagraph" />
            </StyledParagraph>
            <StyledAnchor
              as={Link}
              to="/download/Results/Sprint/resultats SI.html"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.spParagraph1" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledAnchor
              as={Link}
              to="/download/Results/Sprint/resultats_cat.html"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.spParagraph2" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledAnchor
              as={Link}
              to="/download/Results/Sprint/resultats_selection_ SI_V2.html"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.spParagraph3" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledAnchor
              as={Link}
              to="/download/Results/Sprint/resultats_selections_cat_V2.html"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="Results.spParagraph4" />
              </StyledParagraph>
            </StyledAnchor>
          </StyledBorderBox>
          <StyledBorderBox id="MD">
            <StyledH3>
              <Translator id="Results.mdTitle" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Results.mdParagraph" />
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox id="LD">
            <StyledH3>
              <Translator id="Results.ldTitle" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Results.ldParagraph" />
            </StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Resultats;
