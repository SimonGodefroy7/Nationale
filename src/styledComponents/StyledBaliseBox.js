import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import style from './style';

const StyledBaliseBox = styled(StyledFlexBox)`
  flex-direction: column;
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
  align-items: flex-end;
  @media (min-width: ${style.mediaSize.tablet}) {
    bottom: 0.4rem;
    right: 0.4rem;
  }
  @media (min-width: ${style.mediaSize.laptop}) {
    bottom: 1rem;
    right: 1rem;
  }
`

export default StyledBaliseBox;
