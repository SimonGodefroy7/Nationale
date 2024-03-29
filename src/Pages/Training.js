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
import StyledAnchor from "../styledComponents/StyledAnchor";
import Translator from "../Logic/Translator";
import style from "../styledComponents/style";
import B771 from "../image/MapExtract/balltrap1Small.jpg";
import B772 from "../image/MapExtract/balltrap2Small.jpg";
import B773 from "../image/MapExtract/balltrap3Small.jpg";
import OPA1 from "../image/MapExtract/OPA1Small.jpg";
import OPA2 from "../image/MapExtract/OPA2Small.jpg";
import OPA3 from "../image/MapExtract/OPA3Small.jpg";
import mobileSBackground from "../image/Background/MobileS.jpg";
import mobileMBackground from "../image/Background/MobileM.jpg";
import mobileLBackground from "../image/Background/MobileL.jpg";
import tabletBackground from "../image/Background/Tablet.jpg";
import laptopBackground from "../image/Background/Laptop.jpg";
import laptopLBackground from "../image/Background/LaptopL.jpg";
import desktopBackground from "../image/Background/Desktop.jpg";
import photoPoligny1 from "../image/EntrainementB771Small.jpg";
import photoPoligny2 from "../image/EntrainementB772Small.jpg";

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
    let state = this.props;
    return (
      <Page>
        <Helmet>
          <title>Entrainements | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledHero
          backgroundImageMobileS={mobileSBackground}
          backgroundImageMobileM={mobileMBackground}
          backgroundImageMobileL={mobileLBackground}
          backgroundImageTablet={tabletBackground}
          backgroundImageLaptop={laptopBackground}
          backgroundImageLaptopL={laptopLBackground}
          backgroundImageDesktop={desktopBackground}
        >
          <StyledHeroHeadline isEnglish={false} medium>
            <StyledH1>
              <Translator id="Training.bacgroundParagraph1" />
              <br />
              <Translator id="Training.bacgroundParagraph2" />
            </StyledH1>
          </StyledHeroHeadline>
        </StyledHero>
        <StyledSection justify>
          <StyledH1>
            <Translator id="Training.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="Training.lastUpate" />
          </StyledSpan>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Training.box0Title1" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Training.box01Paragraph1" />
            </StyledParagraph>
            <StyledParagraph>
              <StyledSpan>
                <Translator id="Training.box01Paragraph21" />
              </StyledSpan>
              <StyledSpan>
                <StyledAnchor href="https://www.google.fr/maps/dir/48.3158918,2.571922/48.3163368,2.5713147/@48.3159066,2.5710542,145m/ data=!3m1!1e3!4m2!4m1!3e2">
                  <Translator id="Training.box01Paragraph22" />
                </StyledAnchor>
              </StyledSpan>
            </StyledParagraph>
            <StyledFlexBox flexDirection="row" alignItems="center">
              <StyledParagraph>
                {state.langue === "fr" && (
                  <React.Fragment>
                    <StyledSpan>
                      <Translator id="Training.box01Paragraph3" />
                    </StyledSpan>
                    <StyledSpan>
                      <StyledAnchor href="https://docs.google.com/forms/d/e/1FAIpQLSfsN-_WwwRjMh2fyFeRpenSZBcT3xCCBu8h6eVy54CnOJxr7Q/viewform?usp=pp_url">
                        <Translator id="Training.box01Paragraph4" />
                      </StyledAnchor>
                    </StyledSpan>
                  </React.Fragment>
                )}
                {state.langue === "en" && (
                  <React.Fragment>
                    <StyledSpan>
                      <StyledAnchor href="https://docs.google.com/forms/d/e/1FAIpQLSfsN-_WwwRjMh2fyFeRpenSZBcT3xCCBu8h6eVy54CnOJxr7Q/viewform?usp=pp_url">
                        <Translator id="Training.box01Paragraph4" />
                      </StyledAnchor>
                    </StyledSpan>
                    <StyledSpan>
                      <Translator id="Training.box01Paragraph3" />
                    </StyledSpan>
                  </React.Fragment>
                )}
              </StyledParagraph>
            </StyledFlexBox>
            <StyledParagraph>
              <StyledSpan fontWeight="bold">
                <Translator id="Training.box01Paragraph5" />
              </StyledSpan>
            </StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Training.box0Title2" />
            </StyledH3>
            <StyledParagraph>
              <Translator id="Training.box02Paragraph11" />
            </StyledParagraph>
            <StyledParagraph margin="0.5rem 0 0 0">
              <Translator id="Training.box02Paragraph12" />
            </StyledParagraph>
            <StyledParagraph margin="0 0 0.5rem 0">
              <Translator id="Training.box02Paragraph13" />
            </StyledParagraph>
            {state.langue === "fr" && (
              <React.Fragment>
                <StyledParagraph>
                  <Translator id="Training.box02Paragraph14" />
                </StyledParagraph>
              </React.Fragment>
            )}
          </StyledBorderBox>
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
              </StyledFlexBox>
            </StyledPracticalInfo>
            <StyledFlexBox alignItems="center">
              <StyledFlexBox margin="0.5rem">
                <StyledImg
                  src={photoPoligny2}
                  alt={photoPoligny2}
                  imageWidth="100%"
                />
              </StyledFlexBox>
              <StyledFlexBox margin="0.5rem">
                <StyledImg
                  src={photoPoligny1}
                  alt={photoPoligny1}
                  imageWidth="100%"
                />
              </StyledFlexBox>
            </StyledFlexBox>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Training.training1Box1PlanTitle" />
            </StyledH3>
            <StyledFlexBox alignItems="center">
              <iframe
                title="plan"
                width={iFrameWidth}
                height={iFrameHeight}
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCyOwNtZ5YrRqUXd2EW7uxiv_NIWR5Zr7Y&q=48.244672, 2.730188&language=${state.langue}`}
                allowFullScreen
              />
            </StyledFlexBox>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Training.training1Box4Title" />
            </StyledH3>
            <StyledMapExtract id="mapExtracts1">
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
              </StyledFlexBox>
            </StyledPracticalInfo>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Training.training2Box1PlanTitle" />
            </StyledH3>
            <StyledParagraph>
              <StyledSpan fontWeight={"bold"}>
                <Translator id="Training.training1Box2PlanParagraph1" />
              </StyledSpan>
              <StyledSpan>
                <Translator id="Training.training1Box2PlanParagraph2" />
              </StyledSpan>
            </StyledParagraph>
            <StyledFlexBox alignItems="center">
              <iframe
                title="plan"
                width={iFrameWidth}
                height={iFrameHeight}
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCyOwNtZ5YrRqUXd2EW7uxiv_NIWR5Zr7Y&q= 48.353082, 2.719544&language=${state.langue}`}
                allowFullScreen
              />
            </StyledFlexBox>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3>
              <Translator id="Training.training2Box4Title" />
            </StyledH3>
            <StyledMapExtract id="mapExtracts2">
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
const mapStateToProps = (state) => ({ langue: state.language });
export default connect(mapStateToProps)(Training);
