import React, { Component } from 'react';
import Header from './Header'
//import Footer from './Footer'
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import { Helmet } from "react-helmet";

class Page extends Component {
  render() {
    return (
      <StyledFlexBox>
        <Helmet>
          <title>Nationale Nord Ouest 2020</title>
          <meta name="description" content="Venez participez à la nationale nord-ouest 2020 de course d'orientation dans la région de Fontainebleau(77). L'événement propose 3 courses sur 3 jours (21, 22 et 23 août 2020)"/>
        </Helmet>
        <Header />
        {this.props.children}
        {/*<Footer />*/}
      </StyledFlexBox>
    );
  }
}

export default Page;
