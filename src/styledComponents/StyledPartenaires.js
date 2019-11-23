import styled from 'styled-components';
import StyledFlexBox from './StyledFlexBox';
import StyledImg from './StyledImg';
import style from './style';

const StyledPartenaires = styled(StyledFlexBox)`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-style: solid;
  border-radius: 1rem;
  border-color: ${style.colors.secondary};
  margin: 1rem;
  width: 17rem;
  align-self: center;

  ${StyledImg} {
    margin: 1rem;
    width: 7rem;
  }

  @media (min-width: ${style.mediaSize.tablet}) {
    width: 40rem;
    ${StyledImg} {
      width: 15rem;
    }
  }
`

export default StyledPartenaires;
