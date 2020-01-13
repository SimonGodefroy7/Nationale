import styled from 'styled-components';
import { rgba } from 'polished';
import StyledFlexBox from './StyledFlexBox';
import StyledH1 from './StyledH1';
import style from './style';

const StyledHeroHeadline = styled(StyledFlexBox)`
  background-color: ${rgba(style.colors.primary, 0.9)};
  width: ${props => props.big ? "10rem" : props => props.medium ? "9rem" : "7rem"};
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1rem;

  ${StyledH1} {
    text-align: center;
    font-size: ${style.fontSize.small};
  }

  @media (min-width: ${style.mediaSize.mobileM}) {
    ${StyledH1} {
      font-size: ${style.fontSize.small};
    }
    width: ${props => props.big ? "13rem" : props => props.medium ? "9rem" : "7rem"};
  }
  @media (min-width: ${style.mediaSize.mobileL}) {
    ${StyledH1} {
      font-size: ${style.fontSize.medium};
    }
    width: ${props => props.big ? "15rem" : props => props.medium ? "14rem" : "10rem"};
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    ${StyledH1} {
      font-size: ${style.fontSize.big};
    }
    width: ${props => props.big ? "30rem" : props => props.medium ? "18rem" : "15rem"};
  }
`

export default StyledHeroHeadline;
