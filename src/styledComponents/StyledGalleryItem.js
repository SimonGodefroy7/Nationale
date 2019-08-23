import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import style from './style';

const StyledGalleryItem = styled(StyledFlexBox)`
  margin: 0.25rem;
  padding: 0.25rem;
  border-style: solid;
  border-width: 0.05rem;
  @media (min-width: ${style.mediaSize.tablet}) {
    width: 47%;
  }
  @media (min-width: ${style.mediaSize.laptopL}) {
    width: 30%;
  }
`

export default StyledGalleryItem;
