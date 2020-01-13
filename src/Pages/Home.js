import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Link from '../Logic/Link';
import Page from '../Logic/Page';
import Translator from '../Logic/Translator';
import StyledH1 from '../styledComponents/StyledH1';
import StyledH3 from '../styledComponents/StyledH3';
import StyledParagraph from '../styledComponents/StyledParagraph';
import StyledBorderBox from '../styledComponents/StyledBorderBox';
import StyledSection from '../styledComponents/StyledSection';
import StyledHero from '../styledComponents/StyledHero';
import StyledHeroHeadline from '../styledComponents/StyledHeroHeadline';
import StyledBalise from '../styledComponents/StyledBalise';
import StyledBaliseBox from '../styledComponents/StyledBaliseBox';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledAnchor from '../styledComponents/StyledAnchor';
import StyledImg from '../styledComponents/StyledImg';
import zoneInterditeSmall from '../image/ZoneinterditeNationales_NO_2020_small.jpg';
import flyerSmall from '../image/flyerSmall.jpg';
import smallImage1 from '../image/Gallery/small/Image1.jpg';
import smallImage2 from '../image/Gallery/small/Image2.jpg';

class Home extends Component {
  render() {
    return (
      <Page>
        <Helmet>
          <title>Accueil | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
        <StyledHero>
          <StyledHeroHeadline big>
            <StyledH1><Translator id="Home.bacgroundParagraph" /></StyledH1>
          </StyledHeroHeadline>
          <StyledFlexBox flexDirection="row" justifyContent="space-between" width="80%">
            <StyledAnchor as={Link} hoverless paddingless to="/sprint">
              <StyledBalise>
                <StyledH1><Translator id="Home.baliseSpTitle" /></StyledH1>
                <StyledBaliseBox>
                  <StyledParagraph><Translator id="Home.baliseSpParagraph1" /></StyledParagraph>
                  <StyledParagraph><Translator id="Home.baliseSpParagraph2" /></StyledParagraph>
                </StyledBaliseBox>
              </StyledBalise>
            </StyledAnchor>
            <StyledAnchor as={Link} hoverless paddingless to="long-distance">
              <StyledBalise>
                <StyledH1><Translator id="Home.baliseLdTitle" /></StyledH1>
                <StyledBaliseBox>
                  <StyledParagraph><Translator id="Home.baliseLdParagraph1" /></StyledParagraph>
                  <StyledParagraph><Translator id="Home.baliseLdParagraph2" /></StyledParagraph>
                </StyledBaliseBox>
              </StyledBalise>
            </StyledAnchor>
          </StyledFlexBox>
          <StyledFlexBox>
            <StyledAnchor as={Link} hoverless paddingless to="/middle-distance">
              <StyledBalise>
                <StyledH1><Translator id="Home.baliseMdTitle" /></StyledH1>
                <StyledBaliseBox>
                  <StyledParagraph><Translator id="Home.baliseMdParagraph1" /></StyledParagraph>
                  <StyledParagraph><Translator id="Home.baliseMdParagraph2" /></StyledParagraph>
                </StyledBaliseBox>
              </StyledBalise>
            </StyledAnchor>
          </StyledFlexBox>
        </StyledHero>
        <StyledSection>
          <StyledH1><Translator id="Home.title" /></StyledH1>
          <StyledBorderBox>
            <StyledH3><Translator id="Home.box1Title" /></StyledH3>
            <StyledParagraph><Translator id="Home.box11Paragraph" /></StyledParagraph>
            <br/>
            <StyledParagraph><Translator id="Home.box121Paragraph" /></StyledParagraph>
            <StyledParagraph><Translator id="Home.box122Paragraph" /></StyledParagraph>
            <StyledParagraph><Translator id="Home.box123Paragraph" /></StyledParagraph>
            <br/>
            <StyledParagraph><Translator id="Home.box13Paragraph" /></StyledParagraph>
            <br/>
            <StyledParagraph><Translator id="Home.box14Paragraph" /></StyledParagraph>
            <br/>
            <StyledParagraph><Translator id="Registration.paragraph" /><StyledAnchor href="http://www.ffcorientation.fr/" textAlign="center">FFCO</StyledAnchor></StyledParagraph>
            <StyledAnchor as={Link} hoverless centerimg to="/download/flyer.jpg" target="_blank" download>
              <StyledImg
                src={flyerSmall}
                alt={flyerSmall}
                imageWidth="100%"
                maxWidth="30rem"
              />
            </StyledAnchor>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="Home.box5Title" /></StyledH3>
            <StyledParagraph><Translator id="Home.box5Paragraph" /></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="Home.box6Title" /></StyledH3>
            <StyledFlexBox flexDirection="row" justifyContent="space-around" margin="1rem">
              <StyledImg
                src={smallImage1}
                alt={smallImage1}
                imageWidth="40%"
              />
              <StyledImg
                src={smallImage2}
                alt={smallImage2}
                imageWidth="40%"
              />
            </StyledFlexBox>
            <StyledParagraph textAlign="center"><StyledAnchor as={Link} to="/gallery"><Translator id="Home.box6Paragraph" /></StyledAnchor></StyledParagraph>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="Home.box2Title" /></StyledH3>
            <StyledParagraph><Translator id="Home.box2Paragraph" /></StyledParagraph>
            <StyledAnchor as={Link} hoverless to="/download/Nationales_NO_2020.pdf" target="_blank" download>
              <StyledImg
                src={zoneInterditeSmall}
                alt={zoneInterditeSmall}
                imageWidth="100%"
              />
            </StyledAnchor>
          </StyledBorderBox>
          <StyledBorderBox>
            <StyledH3><Translator id="Home.box3Title" /></StyledH3>
            <StyledParagraph><Translator id="Home.box3Paragraph" /></StyledParagraph>
          </StyledBorderBox>
        </StyledSection>
      </Page>
    );
  }
}

export default Home;
