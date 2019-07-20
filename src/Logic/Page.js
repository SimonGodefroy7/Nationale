import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import StyledSection from '../styledComponents/StyledSection';

class Page extends Component {
  render() {
    return (
      <StyledFlexBox>
        <Header />
        <StyledSection>
          {this.props.children}
        </StyledSection>
        <Footer />
      </StyledFlexBox>
    );
  }
}

export default Page;
