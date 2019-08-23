import React, { Component } from 'react';
import GalleryComp from 'react-image-gallery';
import Page from '../Logic/Page';
import StyledH1 from '../styledComponents/StyledH1';
import StyledSection from '../styledComponents/StyledSection';
import Translator from '../Logic/Translator';

const images = [
  {
    original: '../image/MobileS.jpg',
    thumbnail: '../image/MobileS.jpg'
  },
  {
    original: '../image/Gallery/20190730_100636.jpg',
    thumbnail: '../image/Gallery/20190730_100636.jpg'
  },
  {
    original: '../image/Gallery/20190730_100756.jpg',
    thumbnail: '../image/Gallery/20190730_100756.jpg'
  }
];

class Gallery extends Component {

  render() {
    return (
      <Page>
        <StyledSection>
          <StyledH1><Translator id="Galery.title" /></StyledH1>
          <GalleryComp items={images} />
        </StyledSection>
      </Page>
    );
  }
}

export default Gallery;
