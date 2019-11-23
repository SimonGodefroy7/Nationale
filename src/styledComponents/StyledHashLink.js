import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import style from './style';

const StyledHashLink = styled(HashLink)`
  color: ${style.colors.dark};
  text-decoration: none;
`

export default StyledHashLink;
