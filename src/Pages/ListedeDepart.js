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

class ListeDeDepartResultats extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Liste de départ | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledSection justify>
          <StyledH1>
            <Translator id="StartList.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="StartList.lastUpate" />
          </StyledSpan>
          <StyledBorderBox id="Sprint">
            <StyledH3>
              <Translator id="StartList.spTitle" />
            </StyledH3>
            <StyledAnchor
              as={Link}
              to="/download/Horaires_departs_Sprint.html"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="StartList.spParagraph1" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledAnchor
              as={Link}
              to="/download/horaires_ clubs_selections_Sprint.pdf"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="StartList.spParagraph21" />
              </StyledParagraph>
            </StyledAnchor>
            <StyledAnchor
              as={Link}
              to="/download/horaires_par_ clubs_sauf_selections_Sprint.pdf"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="StartList.spParagraph22" />
              </StyledParagraph>
            </StyledAnchor>
          </StyledBorderBox>
          <StyledBorderBox id="MD">
            <StyledH3>
              <Translator id="StartList.mdTitle" />
            </StyledH3>
            <StyledAnchor
              as={Link}
              to="/download/Horaires_departs_MD.pdf"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="StartList.mdParagraph" />
              </StyledParagraph>
            </StyledAnchor>
          </StyledBorderBox>
          <StyledBorderBox id="LD">
            <StyledH3>
              <Translator id="StartList.ldTitle" />
            </StyledH3>
            <StyledAnchor
              as={Link}
              to="/download/Horaires_departs_LD.pdf"
              target="_blank"
            >
              <StyledParagraph>
                <Translator id="StartList.ldParagraph" />
              </StyledParagraph>
            </StyledAnchor>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default ListeDeDepartResultats;
