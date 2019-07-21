import React, { Component } from 'react';
import StyledNav from '../styledComponents/StyledNav';
import StyledUl from '../styledComponents/StyledUl';
import StyledLi from '../styledComponents/StyledLi';
import StyledLink from '../styledComponents/StyledLink';
import StyledMenu from '../styledComponents/StyledMenu';
import StyledFlexBox from '../styledComponents/StyledFlexBox';
import { LANG_FR, LANG_EN } from '../redux/actions/types';
import { connect } from 'react-redux';
import Translator from '../Logic/Translator';

class Menu extends Component {
  constructor(props){
    super(props);

    this.onClickFR = this.onClickFR.bind(this);
    this.onClickEN = this.onClickEN.bind(this);
  };

  onClickFR() {
    const action = {type: LANG_FR};
    this.props.dispatch(action);
  }
  onClickEN() {
    const action = {type: LANG_EN};
    this.props.dispatch(action);
  }
  render() {
    return (
      <StyledMenu>
        <StyledNav>
          <StyledUl>
            <StyledLi>
              <StyledLink to="/"><Translator id="Menu.home" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/evenements/"><Translator id="Menu.events" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/inscription/"><Translator id="Menu.registration" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/listeDeDepart"><Translator id="Menu.startList" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/Resultats"><Translator id="Menu.results" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/hebergements"><Translator id="Menu.accommodation" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/partenaires/"><Translator id="Menu.partners" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/contact/"><Translator id="Menu.contact" /></StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledFlexBox onClick={this.onClickFR}>
                Français
              </StyledFlexBox>
            </StyledLi>
            <StyledLi>
              <StyledFlexBox onClick={this.onClickEN}>
                English
              </StyledFlexBox>
            </StyledLi>
          </StyledUl>
        </StyledNav>
      </StyledMenu>
    );
  }
}

export default connect()(Menu);
