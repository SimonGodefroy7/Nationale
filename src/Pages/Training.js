import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import Page from "../Logic/Page";
import StyledH1 from "../styledComponents/StyledH1";
import StyledSection from "../styledComponents/StyledSection";
import StyledH3 from "../styledComponents/StyledH3";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledFlexBox from "../styledComponents/StyledFlexBox";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledHero from "../styledComponents/StyledHero";
import StyledSpan from "../styledComponents/StyledSpan";
import StyledHeroHeadline from "../styledComponents/StyledHeroHeadline";
import StyledPracticalInfo from "../styledComponents/StyledPracticalInfo";
import StyledMapExtract from "../styledComponents/StyledMapExtract";
import StyledImg from "../styledComponents/StyledImg";
import Translator from "../Logic/Translator";
import style from "../styledComponents/style";
import B771 from "../image/MapExtract/B77-1Small.jpg";
import B772 from "../image/MapExtract/B77-2Small.jpg";
import B773 from "../image/MapExtract/B77-3Small.jpg";
import OPA1 from "../image/MapExtract/OPA1Small.jpg";
import OPA2 from "../image/MapExtract/OPA2Small.jpg";
import OPA3 from "../image/MapExtract/OPA3Small.jpg";

class Training extends Component {
  render() {
    let iFrameWidth;
    let iFrameHeight;
    if (window.matchMedia(`(max-width: ${style.mediaSize.mobileS})`).matches) {
      iFrameWidth = 200;
      iFrameHeight = 200;
    } else if (
      window.matchMedia(`(max-width: ${style.mediaSize.mobileM})`).matches
    ) {
      iFrameWidth = 250;
      iFrameHeight = 250;
    } else if (
      window.matchMedia(`(max-width: ${style.mediaSize.mobileL})`).matches
    ) {
      iFrameWidth = 300;
      iFrameHeight = 300;
    } else if (
      window.matchMedia(`(max-width: ${style.mediaSize.tablet})`).matches
    ) {
      iFrameWidth = 600;
      iFrameHeight = 400;
    } else {
      iFrameWidth = 800;
      iFrameHeight = 600;
    }
    return (
      <Page>
        <Helmet>
          <title>Entrainements | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledHero>
          <StyledHeroHeadline isEnglish={false} medium>
            <StyledH1>
              <Translator id="Training.bacgroundParagraph1" />
              <br />
              <Translator id="Training.bacgroundParagraph2" />
            </StyledH1>
          </StyledHeroHeadline>
        </StyledHero>
        <StyledSection>
          <StyledH1>
            <Translator id="Training.title" />
          </StyledH1>
          <StyledH3>
            <Translator id="Training.training1Title" />
          </StyledH3>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Training.training1Box1Title" />
            </StyledH3>
            <StyledPracticalInfo>
              <StyledFlexBox>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="Training.training1Box1DateTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="Training.training1Box1DateParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="Training.training1Box1PlacesTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="Training.training1Box1PlacesParagraph" />
                  </StyledSpan>
                </StyledParagraph>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="Training.training1Box1MapTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="Training.training1Box1MapParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
              </StyledFlexBox>
            </StyledPracticalInfo>
          </StyledBorderBox>
          {/*<StyledBorderBox>
            <StyledH3>
              <Translator id="Training.training1Box1PlanTitle" />
            </StyledH3>
            <StyledFlexBox alignItems="center">
              <iframe
                title="plan"
                width={iFrameWidth}
                height={iFrameHeight}
                frameborder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCyOwNtZ5YrRqUXd2EW7uxiv_NIWR5Zr7Y&q=Franchard, Fontaineb1 Route de l'Ermitage, 77300 Fontainebleauleau&language=${state.langue}`}
                allowfullscreen
              />
            </StyledFlexBox>
          </StyledBorderBox>*/}
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Training.training1Box4Title" />
            </StyledH3>
            <StyledMapExtract>
              <StyledFlexBox>
                <StyledImg src={B771} alt={B771} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={B772} alt={B772} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={B773} alt={B773} />
              </StyledFlexBox>
            </StyledMapExtract>
          </StyledBorderBox>
          <StyledH3>
            <Translator id="Training.training2Title" />
          </StyledH3>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Training.training2Box1Title" />
            </StyledH3>
            <StyledPracticalInfo>
              <StyledFlexBox>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="Training.training2Box1DateTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="Training.training2Box1DateParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
                <StyledParagraph>
                  <StyledSpan fontWeight={"bold"}>
                    <Translator id="Training.training2Box1PlacesTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="Training.training2Box1PlacesParagraph" />
                  </StyledSpan>
                </StyledParagraph>
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledParagraph>
                  <StyledSpan fontWeight="bold">
                    <Translator id="Training.training2Box1MapTitle" />
                  </StyledSpan>
                  <StyledSpan>
                    <Translator id="Training.training2Box1MapParagraph" />
                  </StyledSpan>
                </StyledParagraph>
                <br />
              </StyledFlexBox>
            </StyledPracticalInfo>
          </StyledBorderBox>
          {/*<StyledBorderBox>
            <StyledH3>
              <Translator id="Training.training2Box1PlanTitle" />
            </StyledH3>
            <StyledFlexBox alignItems="center">
              <iframe
                title="plan"
                width={iFrameWidth}
                height={iFrameHeight}
                frameborder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCyOwNtZ5YrRqUXd2EW7uxiv_NIWR5Zr7Y&q=Franchard, Fontaineb1 Route de l'Ermitage, 77300 Fontainebleauleau&language=${state.langue}`}
                allowfullscreen
              />
            </StyledFlexBox>
          </StyledBorderBox>*/}
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Training.training2Box4Title" />
            </StyledH3>
            <StyledMapExtract>
              <StyledFlexBox>
                <StyledImg src={OPA1} alt={OPA1} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={OPA2} alt={OPA2} />
              </StyledFlexBox>
              <StyledFlexBox>
                <StyledImg src={OPA3} alt={OPA3} />
              </StyledFlexBox>
            </StyledMapExtract>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}
const mapStateToProps = state => ({ langue: state.language });
export default connect(mapStateToProps)(Training);
