import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";
import Page from '../Logic/Page';
import StyledH1HeaderTitle from '../styledComponents/StyledH1HeaderTitle';
import StyledImg from '../styledComponents/StyledImg';
import StyledGallery from '../styledComponents/StyledGallery';
import StyledGalleryItem from '../styledComponents/StyledGalleryItem';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';
import gallery from '../image/Gallery/gallery';

const bigImages = gallery.bigImages;
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
                views={bigImages.map(x => ({
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
