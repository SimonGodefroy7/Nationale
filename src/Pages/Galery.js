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
      urbanGallery: false,
      forestGallery: true
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateInUrbanGallery = this.updateInUrbanGallery.bind(this);
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
  updateInUrbanGallery = isUrban => {
    this.setState(state => ({
      ...this.state,
      urbanGallery: isUrban,
      forestGallery: !isUrban
    }));
  };

  render() {
    const {
      ModalIsOpen,
      currentImage,
      urbanGallery,
      forestGallery
    } = this.state;
    return (
      <Page>
        <Helmet>
          <title>Galerie photos | Nationale Nord Ouest 2020</title>
          <meta
            name="description"
            content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"
          />
        </Helmet>
        <StyledSection>
          <StyledH1>
            <Translator id="Gallery.title" />
          </StyledH1>
          <StyledFlexBox flexDirection="row" justifyContent="center">
            <StyledButton
              isSelected={urbanGallery}
              margin="1rem"
              padding="0.5rem"
              onClick={() => this.updateInUrbanGallery(true)}
            >
              Urban
            </StyledButton>
            <StyledButton
              isSelected={forestGallery}
              margin="1rem"
              padding="0.5rem"
              onClick={() => this.updateInUrbanGallery(false)}
            >
              Forest
            </StyledButton>
          </StyledFlexBox>
          {forestGallery && (
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
          {urbanGallery && (
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
        </StyledSection>
      </Page>
    );
  }
}

export default Gallery;
