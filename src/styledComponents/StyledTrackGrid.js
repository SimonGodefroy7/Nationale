import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledSpan from './StyledSpan';
import StyledParagraph from './StyledParagraph';
import style from './style';

const StyledTrackGrid = styled(StyledFlexBox)`
  ${StyledSpan} {
    font-size: 0.4rem;
  }
  ${StyledParagraph} {
    font-size: 0.4rem;
  }
  @media (min-width: ${style.mediaSize.mobileM}) {
    ${StyledSpan} {
      font-size: 0.5rem;
    }
    ${StyledParagraph} {
      font-size: 0.5rem;
    }
  }
  @media (min-width: ${style.mediaSize.mobileL}) {
    ${StyledSpan} {
      font-size: 0.6rem;
    }
    ${StyledParagraph} {
      font-size: 0.6rem;
    }
  }
  @media (min-width: ${style.mediaSize.tablet}) {
    ${StyledSpan} {
      font-size: 1rem;
    }
    ${StyledParagraph} {
      font-size: 1rem;
    }
  }
`

export default StyledTrackGrid;
