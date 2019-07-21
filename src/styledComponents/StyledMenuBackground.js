import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledParagraph from './StyledParagraph';
import style from './style';

const StyledMenuBackground = styled(StyledFlexBox)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${StyledParagraph} {
    display: none;
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    align-items: unset;
    ${StyledParagraph} {
      display: flex;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    align-items: center;
    ${StyledParagraph} {
      display: none;
    }
  }
`

export default StyledMenuBackground;
