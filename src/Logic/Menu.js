import React, { Component } from 'react';
import StyledNav from '../styledComponents/StyledNav';
import StyledUl from '../styledComponents/StyledUl';
import StyledLi from '../styledComponents/StyledLi';
import StyledLink from '../styledComponents/StyledLink';
import StyledMenu from '../styledComponents/StyledMenu';
import Translator from '../Logic/Translator';

class Menu extends Component {
  render() {
    return (
      <StyledMenu>
        <StyledNav>
          <StyledUl>
            <StyledLi>
              <StyledLink to="/"><Translator id="Menu.home" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/evenements"><Translator id="Menu.events" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/inscription"><Translator id="Menu.registration" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/listeDeDepart"><Translator id="Menu.startList" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/resultats"><Translator id="Menu.results" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/gallery"><Translator id="Menu.gallery" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/hebergements"><Translator id="Menu.accommodation" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/partenaires"><Translator id="Menu.partners" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/contact"><Translator id="Menu.contact" /></StyledLink>
            </StyledLi>
          </StyledUl>
        </StyledNav>
      </StyledMenu>
    );
  }
}

export default Menu;
