import styled from 'styled-components';
import StyledImg from './StyledImg';
import style from './style';

const StyledPartenairesLink = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: row;
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

export default StyledPartenairesLink;
