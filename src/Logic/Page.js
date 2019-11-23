import React, { Component } from 'react';
import Header from './Header'
//import Footer from './Footer'
import StyledFlexBox from '../styledComponents/StyledFlexBox';

class Page extends Component {
  render() {
    return (
      <StyledFlexBox>
        <Header />
        {this.props.children}
        {/*<Footer />*/}
      </StyledFlexBox>
    );
  }
}

export default Page;
