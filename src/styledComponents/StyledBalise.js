import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledH1 from './StyledH1';
import StyledParagraph from './StyledParagraph';
import baliseS from '../image/BaliseS.jpg'
import baliseM from '../image/BaliseM.jpg'
import baliseL from '../image/BaliseL.jpg'
import style from './style';

const StyledBalise = styled(StyledFlexBox)`
  background-image: url(${baliseS});
  height: 50px;
  width: 50px;
  position: relative;

  ${StyledH1} {
    font-size: 0.7rem;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
  }
  ${StyledParagraph} {
    font-size: 0.7rem;
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    background-image: url(${baliseM});
    height: 75px;
    width: 75px;
    ${StyledH1} {
      font-size: ${style.fontSize.small};
      top: 0.3rem;
      left: 0.3rem;
    }
    ${StyledParagraph} {
      font-size: ${style.fontSize.small};
    }
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    background-image: url(${baliseL});
    height: 150px;
    width: 150px;
    ${StyledH1} {
      font-size: ${style.fontSize.big};
      top: 0.5rem;
      left: 0.5rem;
    }
    ${StyledParagraph} {
      font-size: ${style.fontSize.medium};
    }
  }
`

export default StyledBalise;
