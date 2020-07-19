import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import LangMenu from "./LangMenu";
import StyledH1 from "../styledComponents/StyledH1";
import StyledHeader from "../styledComponents/StyledHeader";
import StyledFlexBox from "../styledComponents/StyledFlexBox";
import StyledAnchor from "../styledComponents/StyledAnchor";
import StyledMediaQuery from "../styledComponents/StyledMediaQuery";
import Translator from "../Logic/Translator";
import Link from "../Logic/Link";
import style from "../styledComponents/style";

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledFlexBox
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <StyledAnchor
            as={Link}
            paddingless
            hoverless
            hovertextdecoration="true"
            to="/"
          >
            <StyledMediaQuery
              largeScreenFirst
              breakpoint={style.mediaSize.tablet}
            >
              <StyledH1>
                <Translator id="Header.headerTitle" />
              </StyledH1>
            </StyledMediaQuery>
            <StyledMediaQuery breakpoint={style.mediaSize.tablet}>
              <StyledH1>
                <Translator id="Header.headerTitleShort" />
              </StyledH1>
            </StyledMediaQuery>
          </StyledAnchor>
          <StyledFlexBox>
            <LangMenu />
            <StyledMediaQuery breakpoint={style.mediaSize.laptop}>
              <MenuMobile />
            </StyledMediaQuery>
          </StyledFlexBox>
        </StyledFlexBox>
        <StyledMediaQuery largeScreenFirst breakpoint={style.mediaSize.laptop}>
          <Menu />
        </StyledMediaQuery>
      </StyledHeader>
    );
  }
}

export default withRouter(Header);
