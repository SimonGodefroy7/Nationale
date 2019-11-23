import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Helmet } from 'react-helmet';
import Page from '../Logic/Page';
import StyledH1HeaderTitle from '../styledComponents/StyledH1HeaderTitle';
import StyledImg from '../styledComponents/StyledImg';
import StyledGallery from '../styledComponents/StyledGallery';
import StyledGalleryItem from '../styledComponents/StyledGalleryItem';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';
import gallery from '../image/Gallery/gallery';

const mediumImages = gallery.mediumImages;
const smallImages = gallery.smallImages;

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      currentImage: 0
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };
  openModal = (index) => {
    this.setState(state => ({ modalIsOpen: true, currentImage: index }));
  }
  closeModal = () => {
    this.setState(state => ({ modalIsOpen: false, currentImage: 0 }));
  }

  render() {
    const { modalIsOpen, currentImage } = this.state;
    return (
      <Page>
        <Helmet>
          <title>Galerie photos | Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
        <StyledSection>
          <StyledH1HeaderTitle><Translator id="Gallery.title" /></StyledH1HeaderTitle>
          <StyledGallery>
            {smallImages.map((image, j) => (
              <StyledGalleryItem key={image.src}>
                <StyledImg onClick={() => this.openModal(j)} src={image.src} />
              </StyledGalleryItem>
            ))}
          </StyledGallery>
          <ModalGateway>
            {modalIsOpen ? (
              <Modal onClose={this.closeModal}>
              <Carousel
                currentIndex={currentImage}
                views={mediumImages.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
              </Modal>
            ) : null}
          </ModalGateway>
        </StyledSection>
      </Page>
    );
  }
}

export default Gallery;
