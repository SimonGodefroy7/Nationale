import React, { Component } from 'react'; //eslint-disable-line no-unused-vars
import Header from './Header' //eslint-disable-line no-unused-vars
import Footer from './Footer' //eslint-disable-line no-unused-vars
import StyledFlexBox from '../styledComponents/StyledFlexBox'; //eslint-disable-line no-unused-vars
import StyledSection from '../styledComponents/StyledSection'; //eslint-disable-line no-unused-vars

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
