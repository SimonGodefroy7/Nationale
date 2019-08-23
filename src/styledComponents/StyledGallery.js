import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import style from './style';

const StyledGallery = styled(StyledFlexBox)`
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${style.mediaSize.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export default StyledGallery;
