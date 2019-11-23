import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledPage from '../styledComponents/StyledPage';

class Page extends Component {
  render() {
    return (
      <StyledPage>
        <Header />
        <StyledFlexBox flexGrow="1">
          {this.props.children}
        </StyledFlexBox>
        <Footer />
      </StyledPage>
    );
  }
}

export default Page;
