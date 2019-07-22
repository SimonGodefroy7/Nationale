import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledH1 from './StyledH1';
import style from './style';

const StyledTabletBox = styled(StyledFlexBox)`
  background-color: #ef7d28;
  width: 8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${StyledH1} {
    text-align: center;
  }
  @media (min-width: ${style.mediaSize.mobileS}) {
    ${StyledH1} {
      font-size: ${style.fontSize.small};
    }
    width: 10rem;
  }
  @media (min-width: ${style.mediaSize.mobileM}) {
    ${StyledH1} {
      font-size: ${style.fontSize.small};
    }
    width: 13rem;
  }
  @media (min-width: ${style.mediaSize.mobileL}) {
    ${StyledH1} {
      font-size: ${style.fontSize.medium};
    }
    width: 15rem;
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    ${StyledH1} {
      font-size: ${style.fontSize.big};
    }
    width: 30rem;
  }
`

export default StyledTabletBox;
