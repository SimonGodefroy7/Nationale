import styled from "styled-components";
import style from "./style";

const StyledVideo = styled.video`
  padding: ${props => props.padding || ""};
  margin: ${props => props.margin || ""};
  width: 220px;
  align-self: center;

  @media (min-width: ${style.mediaSize.mobileS}) {
    width: 220px;
  }

  @media (min-width: ${style.mediaSize.mobileM}) {
    width: 273px;
  }

  @media (min-width: ${style.mediaSize.mobileL}) {
    width: 323px;
  }

  @media (min-width: ${style.mediaSize.tablet}) {
    width: 666px;
  }

  @media (min-width: ${style.mediaSize.laptop}) {
    width: 890px;
  }
`;

export default StyledVideo;
