import React, { Component } from 'react';
import StyledUl from '../styledComponents/StyledUl';
import StyledLi from '../styledComponents/StyledLi';
import StyledAnchor from '../styledComponents/StyledAnchor';
import StyledMenu from '../styledComponents/StyledMenu';
import Translator from '../Logic/Translator';
import Link from '../Logic/Link';

class Menu extends Component {
  render() {
    return (
      <StyledMenu>
        <StyledUl>
          <StyledLi>
            <StyledAnchor as={Link} to="/"><Translator id="Menu.home" /></StyledAnchor>
          </StyledLi>
          <StyledLi>
            <StyledAnchor as={Link} to="/sprint"><Translator id="Menu.eventSprint" /></StyledAnchor>
          </StyledLi>
          <StyledLi>
            <StyledAnchor as={Link} to="/middle-distance"><Translator id="Menu.eventMD" /></StyledAnchor>
          </StyledLi>
          <StyledLi>
            <StyledAnchor as={Link} to="/long-distance"><Translator id="Menu.eventLD" /></StyledAnchor>
          </StyledLi>
          <StyledLi>
            <StyledAnchor as={Link} to="/liste-de-depart"><Translator id="Menu.startList" /></StyledAnchor>
          </StyledLi>
          <StyledLi>
            <StyledAnchor as={Link} to="/resultats"><Translator id="Menu.results" /></StyledAnchor>
          </StyledLi>
          <StyledLi>
            <StyledAnchor as={Link} to="/gallery"><Translator id="Menu.gallery" /></StyledAnchor>
          </StyledLi>
          <StyledLi>
            <StyledAnchor as={Link} to="/hebergements"><Translator id="Menu.accommodation" /></StyledAnchor>
          </StyledLi>
          <StyledLi>
            <StyledAnchor as={Link} to="/partenaires"><Translator id="Menu.partners" /></StyledAnchor>
          </StyledLi>
          <StyledLi>
            <StyledAnchor as={Link} to="/contact"><Translator id="Menu.contact" /></StyledAnchor>
          </StyledLi>
        </StyledUl>
      </StyledMenu>
    );
  }
}

export default Menu;
