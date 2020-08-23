import React, { Component } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Helmet } from "react-helmet";
import Page from "../Logic/Page";
import StyledH1 from "../styledComponents/StyledH1";
import StyledImg from "../styledComponents/StyledImg";
import StyledFlexBox from "../styledComponents/StyledFlexBox";
import StyledGallery from "../styledComponents/StyledGallery";
import StyledGalleryItem from "../styledComponents/StyledGalleryItem";
import StyledSection from "../styledComponents/StyledSection";
import StyledButton from "../styledComponents/StyledButton";
import StyledBorderBox from "../styledComponents/StyledBorderBox";
import StyledParagraph from "../styledComponents/StyledParagraph";
import StyledH3 from "../styledComponents/StyledH3";
import StyledAnchor from "../styledComponents/StyledAnchor";
import StyledSpan from "../styledComponents/StyledSpan";
import Translator from "../Logic/Translator";
import gallery from "../image/Gallery/gallery";

const mediumUrbanImages = gallery.mediumUrbanImages;
const smallUrbanImages = gallery.smallUrbanImages;
const mediumForestImages = gallery.mediumForestImages;
const smallForestImages = gallery.smallForestImages;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalIsOpen: false,
      currentImage: 0,
      gallery: {
        isUrban: false,
        isForest: true,
        isAlbum: false
      }
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateGallery = this.updateGallery.bind(this);
  }
  openModal = index => {
    this.setState(state => ({
      ...this.state,
      ModalIsOpen: true,
      currentImage: index
    }));
  };
  closeModal = () => {
    this.setState(state => ({
      ...this.state,
      ModalIsOpen: false,
      currentImage: 0
    }));
  };
  updateGallery = (isUrban, isForest, isAlbum) => {
    this.setState(state => ({
      ...this.state,
      gallery: {
        isUrban: isUrban,
        isForest: isForest,
        isAlbum: isAlbum
      }
    }));
  };

  render() {
    const { ModalIsOpen, currentImage, gallery } = this.state;
    const { isUrban, isForest, isAlbum } = gallery;
    return (
      <Page>
        <Helmet>
          <title>Galerie photos | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledSection justify>
          <StyledH1>
            <Translator id="Gallery.title" />
          </StyledH1>
          <StyledSpan fontStyle="italic">
            <Translator id="Gallery.lastUpate" />
          </StyledSpan>
          <StyledFlexBox flexDirection="row" justifyContent="center">
            <StyledButton
              isSelected={isUrban}
              margin="1rem"
              padding="0.5rem"
              noHover
              onClick={() => this.updateGallery(true, false, false)}
            >
              <Translator id="Gallery.urban" />
            </StyledButton>
            <StyledButton
              isSelected={isForest}
              margin="1rem"
              padding="0.5rem"
              noHover
              onClick={() => this.updateGallery(false, true, false)}
            >
              <Translator id="Gallery.forest" />
            </StyledButton>
            <StyledButton
              isSelected={isAlbum}
              margin="1rem"
              padding="0.5rem"
              noHover
              onClick={() => this.updateGallery(false, false, true)}
            >
              <Translator id="Gallery.album" />
            </StyledButton>
          </StyledFlexBox>
          {isForest && (
            <React.Fragment>
              <StyledGallery forestGallery>
                {smallForestImages.map((image, j) => (
                  <StyledGalleryItem forestGallery key={image.src}>
                    <StyledImg
                      onClick={() => this.openModal(j)}
                      src={image.src}
                    />
                  </StyledGalleryItem>
                ))}
              </StyledGallery>
              <ModalGateway>
                {ModalIsOpen ? (
                  <Modal onClose={this.closeModal}>
                    <Carousel
                      currentIndex={currentImage}
                      views={mediumForestImages.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </React.Fragment>
          )}
          {isUrban && (
            <React.Fragment>
              <StyledGallery urbanGallery>
                {smallUrbanImages.map((image, j) => (
                  <StyledGalleryItem urbanGallery key={image.src}>
                    <StyledImg
                      onClick={() => this.openModal(j)}
                      src={image.src}
                    />
                  </StyledGalleryItem>
                ))}
              </StyledGallery>
              <ModalGateway>
                {ModalIsOpen ? (
                  <Modal onClose={this.closeModal}>
                    <Carousel
                      currentIndex={currentImage}
                      views={mediumUrbanImages.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </React.Fragment>
          )}
          {isAlbum && (
            <React.Fragment>
              <StyledBorderBox>
                <StyledH3>
                  <Translator id="Gallery.sprint" />
                </StyledH3>
                <StyledParagraph>
                  <StyledAnchor href="https://photos.app.goo.gl/zb2FNpCk4E4xunq1A">
                    <Translator id="Gallery.spPhotograph1" />
                  </StyledAnchor>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledAnchor href="https://photos.app.goo.gl/w1s1F49eMdYBSfVL9">
                    <Translator id="Gallery.spPhotograph2" />
                  </StyledAnchor>
                </StyledParagraph>
              </StyledBorderBox>
              <StyledBorderBox>
                <StyledH3>
                  <Translator id="Gallery.md" />
                </StyledH3>
                <StyledParagraph>
                  <StyledAnchor href="https://photos.app.goo.gl/EmjTb9PmmnWBRgFu6">
                    <Translator id="Gallery.mdPhotograph1" />
                  </StyledAnchor>
                </StyledParagraph>
                <StyledParagraph>
                  <StyledAnchor href="https://photos.app.goo.gl/8coiY5mB2t9s8s2y7">
                    <Translator id="Gallery.mdPhotograph2" />
                  </StyledAnchor>
                </StyledParagraph>
              </StyledBorderBox>
            </React.Fragment>
          )}
        </StyledSection>
      </Page>
    );
  }
}

export default Gallery;
